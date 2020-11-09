/* global Blob marked */

import '../asset/marked.min.js'

export function downloadTestResults (target, fileName, data, auto) {
  const dataBlob = new Blob([JSON.stringify(data, null, 2)], { type: 'text/json' })
  target.setAttribute('href', window.URL.createObjectURL(dataBlob))
  target.setAttribute('download', fileName)
  target.style.display = 'inherit'
  if (auto) {
    target.click()
  }
}

export function renderTestResults (testSuites, testResults, testUUIDs, target, useBrowserCache) {
  let totalTests = 0
  let totalPassed = 0
  testSuites.forEach(testSuite => {
    const headerElement = document.createElement('h3')
    target.appendChild(headerElement)
    const headerText = document.createTextNode(testSuite.name)
    headerElement.appendChild(headerText)
    const listElement = document.createElement('ul')
    const resultList = target.appendChild(listElement)
    let tests = 0
    let passed = 0
    testSuite.tests.forEach(test => {
      if (test.browser_only === true && !useBrowserCache === true) return
      if (test.browser_skip === true && useBrowserCache === true) return
      test.suiteName = testSuite.name
      const testElement = resultList.appendChild(document.createElement('li'))
      testElement.appendChild(showTestResult(testSuites, test.id, testResults))
      testElement.appendChild(showTestName(test, testUUIDs[test.id]))
      tests++
      if (testResults[test.id] === true) {
        passed++
      }
    })
    const summaryElement = document.createElement('p')
    const suiteSummary = target.appendChild(summaryElement)
    suiteSummary.appendChild(document.createTextNode(tests + ' tests, ' + passed + ' passed.'))
    totalTests += tests
    totalPassed += passed
  })
  const totalElement = document.createElement('p')
  const totalSummary = target.appendChild(totalElement)
  const totalText = document.createTextNode('Total ' + totalTests + ' tests, ' + totalPassed + ' passed.')
  totalSummary.appendChild(totalText)
}

export function showTestName (test, uuid) {
  const wrapper = document.createElement('span')
  const span = document.createElement('span')
  span.innerHTML = marked.parse(test.name).slice(3, -5)
  wrapper.appendChild(span)

  if (uuid) {
    const uuidLinkElement = document.createElement('a')
    uuidLinkElement.appendChild(document.createTextNode('⚙︎'))
    uuidLinkElement.setAttribute('class', 'clickhint')
    uuidLinkElement.title = 'Test UUID (click to copy)'
    wrapper.appendChild(uuidLinkElement)
  }
  return wrapper
}

export function showKey (element) {
  const spans = element.getElementsByClassName('fa')
  for (const span of spans) {
    const kind = span.getAttribute('data-kind')
    const styling = resultTypes[kind]
    const contentNode = document.createTextNode(styling[0])
    span.style.color = styling[1]
    span.appendChild(contentNode)
  }
}

export function showTestResult (testSuites, testId, testResults) {
  const result = testResults[testId]
  const resultValue = determineTestResult(testSuites, testId, testResults)
  const resultNode = document.createTextNode(` ${resultValue[0]} `)
  const span = document.createElement('span')
  span.className = 'fa'
  span.style.color = resultValue[1]
  span.appendChild(resultNode)
  if (result && typeof (result[1]) === 'string') {
    span.title = result[1]
  }
  return span
}

const resultTypes = {
  untested: ['-', '', '-'],
  pass: ['\uf058', '#1aa123', '✅'],
  must_fail: ['\uf057', '#c33131', '⛔️'],
  should_fail: ['\uf05a', '#bbbd15', '⚠️'],
  yes: ['\uf055', '#999696', 'Y'],
  no: ['\uf056', '#999696', 'N']
}
const passTypes = [resultTypes.pass, resultTypes.yes]

export function determineTestResult (testSuites, testId, testResults) {
  const test = testLookup(testSuites, testId)
  const result = testResults[testId]
  if (result === undefined) {
    return resultTypes.untested
  }
  if (test.kind === 'must' || test.kind === undefined) {
    if (result === true) {
      return resultTypes.pass
    } else {
      return resultTypes.must_fail
    }
  } else if (test.kind === 'should') {
    if (result === true) {
      return resultTypes.pass
    } else {
      return resultTypes.should_fail
    }
  } else if (test.kind === 'supported') {
    if (result === true) {
      return resultTypes.yes
    } else {
      return resultTypes.no
    }
  } else {
    throw new Error(`Unrecognised test kind ${test.kind}`)
  }
}

export function testLookup (testSuites, testId) {
  for (const testSuite of testSuites) {
    for (const test of testSuite.tests) {
      if (test.id === testId) {
        return test
      }
    }
  }
  throw new Error(`Cannot find test ${testId}`)
}
