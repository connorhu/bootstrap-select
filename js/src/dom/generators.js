
const elementTemplates = {
  div: document.createElement('div'),
  span: document.createElement('span'),
  i: document.createElement('i'),
  subtext: document.createElement('small'),
  a: document.createElement('a'),
  li: document.createElement('li'),
  whitespace: document.createTextNode('\u00A0'),
  fragment: document.createDocumentFragment(),
  option: document.createElement('option')
}

elementTemplates.selectedOption = elementTemplates.option.cloneNode(false)
elementTemplates.selectedOption.setAttribute('selected', true)

elementTemplates.noResults = elementTemplates.li.cloneNode(false)
elementTemplates.noResults.className = 'no-results'

elementTemplates.a.setAttribute('role', 'option')
elementTemplates.a.className = 'dropdown-item'

elementTemplates.subtext.className = 'text-muted'

elementTemplates.text = elementTemplates.span.cloneNode(false)
elementTemplates.text.className = 'text'

elementTemplates.checkMark = elementTemplates.span.cloneNode(false)

function li(content, classes, optgroup) {
  const li = elementTemplates.li.cloneNode(false)

  if (content) {
    if (content.nodeType === 1 || content.nodeType === 11) {
      li.append(content)
    } else {
      li.innerHTML = content
    }
  }

  if (typeof classes !== 'undefined' && classes !== '') {
    li.className = classes
  }

  if (typeof optgroup !== 'undefined' && optgroup !== null) {
    li.classList.add(`optgroup-${optgroup}`)
  }

  return li
}

function a(text, classes, inline) {
  const a = elementTemplates.a.cloneNode(true)

  if (text) {
    if (text.nodeType === 11) {
      a.append(text)
    } else {
      a.insertAdjacentHTML('beforeend', text)
    }
  }

  if (typeof classes !== 'undefined' && classes !== '') {
    a.classList.add(...classes.split(/\s+/))
  }

  if (inline) {
    a.setAttribute('style', inline)
  }

  return a
}

function text(options, useFragment) {
  const textElement = elementTemplates.text.cloneNode(false)
  let subtextElement
  let iconElement

  if (options.content) {
    textElement.innerHTML = options.content
  } else {
    textElement.textContent = options.text

    if (options.icon) {
      const whitespace = elementTemplates.whitespace.cloneNode(false)

      // need to use <i> for icons in the button to prevent a breaking change
      // note: switch to span in next major release
      // todo: refactor this.options.iconBase
      iconElement = (useFragment === true ? elementTemplates.i : elementTemplates.span).cloneNode(false)
      iconElement.className = `${options.iconBase} ${options.icon}`

      elementTemplates.fragment.append(iconElement)
      elementTemplates.fragment.append(whitespace)
    }

    if (options.subtext) {
      subtextElement = elementTemplates.subtext.cloneNode(false)
      subtextElement.textContent = options.subtext
      textElement.append(subtextElement)
    }
  }

  if (useFragment === true) {
    while (textElement.childNodes.length > 0) {
      elementTemplates.fragment.append(textElement.childNodes[0])
    }
  } else {
    elementTemplates.fragment.append(textElement)
  }

  return elementTemplates.fragment
}

function label(options) {
  const textElement = elementTemplates.text.cloneNode(false)
  let subtextElement
  let iconElement

  textElement.innerHTML = options.display

  if (options.icon) {
    const whitespace = elementTemplates.whitespace.cloneNode(false)

    iconElement = elementTemplates.span.cloneNode(false)
    iconElement.className = `${options.iconBase} ${options.icon}` // todo refactor this.options.iconBase

    elementTemplates.fragment.append(iconElement)
    elementTemplates.fragment.append(whitespace)
  }

  if (options.subtext) {
    subtextElement = elementTemplates.subtext.cloneNode(false)
    subtextElement.textContent = options.subtext
    textElement.append(subtextElement)
  }

  elementTemplates.fragment.append(textElement)

  return elementTemplates.fragment
}

export default { li, a, text, label }
