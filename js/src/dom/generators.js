
let elementTemplates = {
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

elementTemplates.selectedOption = elementTemplates.option.cloneNode(false);
elementTemplates.selectedOption.setAttribute('selected', true);

elementTemplates.noResults = elementTemplates.li.cloneNode(false);
elementTemplates.noResults.className = 'no-results';

elementTemplates.a.setAttribute('role', 'option');
elementTemplates.a.className = 'dropdown-item';

elementTemplates.subtext.className = 'text-muted';

elementTemplates.text = elementTemplates.span.cloneNode(false);
elementTemplates.text.className = 'text';

elementTemplates.checkMark = elementTemplates.span.cloneNode(false);

function li(content, classes, optgroup) {
    var li = elementTemplates.li.cloneNode(false);

    if (content) {
        if (content.nodeType === 1 || content.nodeType === 11) {
            li.appendChild(content);
        } else {
            li.innerHTML = content;
        }
    }

    if (typeof classes !== 'undefined' && classes !== '') li.className = classes;
    if (typeof optgroup !== 'undefined' && optgroup !== null) li.classList.add('optgroup-' + optgroup);

    return li;
}

function a(text, classes, inline) {
    var a = elementTemplates.a.cloneNode(true);

    if (text) {
        if (text.nodeType === 11) {
            a.appendChild(text);
        } else {
            a.insertAdjacentHTML('beforeend', text);
        }
    }

    if (typeof classes !== 'undefined' && classes !== '') a.classList.add.apply(a.classList, classes.split(/\s+/));
    if (inline) a.setAttribute('style', inline);

    return a;
}

function text(options, useFragment) {
    var textElement = elementTemplates.text.cloneNode(false),
        subtextElement,
        iconElement;

    if (options.content) {
        textElement.innerHTML = options.content;
    } else {
        textElement.textContent = options.text;

        if (options.icon) {
            var whitespace = elementTemplates.whitespace.cloneNode(false);

            // need to use <i> for icons in the button to prevent a breaking change
            // note: switch to span in next major release
            iconElement = (useFragment === true ? elementTemplates.i : elementTemplates.span).cloneNode(false);
            iconElement.className = this.options.iconBase + ' ' + options.icon;

            elementTemplates.fragment.appendChild(iconElement);
            elementTemplates.fragment.appendChild(whitespace);
        }

        if (options.subtext) {
            subtextElement = elementTemplates.subtext.cloneNode(false);
            subtextElement.textContent = options.subtext;
            textElement.appendChild(subtextElement);
        }
    }

    if (useFragment === true) {
        while (textElement.childNodes.length > 0) {
            elementTemplates.fragment.appendChild(textElement.childNodes[0]);
        }
    } else {
        elementTemplates.fragment.appendChild(textElement);
    }

    return elementTemplates.fragment;
}

function label(options) {
    var textElement = elementTemplates.text.cloneNode(false),
        subtextElement,
        iconElement;

    textElement.innerHTML = options.display;

    if (options.icon) {
        var whitespace = elementTemplates.whitespace.cloneNode(false);

        iconElement = elementTemplates.span.cloneNode(false);
        iconElement.className = this.options.iconBase + ' ' + options.icon;

        elementTemplates.fragment.appendChild(iconElement);
        elementTemplates.fragment.appendChild(whitespace);
    }

    if (options.subtext) {
        subtextElement = elementTemplates.subtext.cloneNode(false);
        subtextElement.textContent = options.subtext;
        textElement.appendChild(subtextElement);
    }

    elementTemplates.fragment.appendChild(textElement);

    return elementTemplates.fragment;
}

export default {li, a, text, label}