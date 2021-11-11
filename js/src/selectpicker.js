/**
 * --------------------------------------------------------------------------
 * bootstrap-select (v2.0.0): index.umd.js
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
    defineJQueryPlugin
} from 'bootstrap/js/src/util/index'
import {Dropdown} from "bootstrap";
import * as generator from './dom/generators'

const classNames = {
    DISABLED: 'disabled',
    DIVIDER: 'divider',
    SHOW: 'open',
    DROPUP: 'dropup',
    MENU: 'dropdown-menu',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    // to-do: replace with more advanced template/customization options
    BUTTONCLASS: 'btn-default',
    POPOVERHEADER: 'popover-title',
    ICONBASE: 'glyphicon',
    TICKICON: 'glyphicon-ok'
}

class Selectpicker
{
    constructor() {

    }

    init() {

    }

    createDropdown() {

    }

    setPositionData() {

    }

    isVirtual() {

    }

    createView() {

    }

    focusItem() {

    }

    defocusItem() {

    }

    setPlaceholder() {

    }

    fetchData() {

    }

    buildData() {

    }

    buildList() {

    }

    findLis() {

    }

    val() {

    }

    render() {

    }

    refresh() {

    }

    setStyle() {

    }

    selectAll() {

    }

    deselectAll() {

    }

    destroy() {

    }

    remove() {

    }

    show() {

    }

    hide() {

    }

}

Selectpicker.VERSION = '2.0.0-beta2'
Selectpicker.DEFAULTS = {
    noneSelectedText: 'Nothing selected',
    noneResultsText: 'No results matched {0}',
    countSelectedText: function (numSelected, numTotal) {
        return (numSelected == 1) ? '{0} item selected' : '{0} items selected';
    },
    maxOptionsText: function (numAll, numGroup) {
        return [
            (numAll == 1) ? 'Limit reached ({n} item max)' : 'Limit reached ({n} items max)',
            (numGroup == 1) ? 'Group limit reached ({n} item max)' : 'Group limit reached ({n} items max)'
        ];
    },
    selectAllText: 'Select All',
    deselectAllText: 'Deselect All',
    source: {},
    chunkSize: 40,
    doneButton: false,
    doneButtonText: 'Close',
    multipleSeparator: ', ',
    styleBase: 'btn',
    style: classNames.BUTTONCLASS,
    size: 'auto',
    title: null,
    placeholder: null,
    allowClear: false,
    selectedTextFormat: 'values',
    width: false,
    container: false,
    hideDisabled: false,
    showSubtext: false,
    showIcon: true,
    showContent: true,
    dropupAuto: true,
    header: false,
    liveSearch: false,
    liveSearchPlaceholder: null,
    liveSearchNormalize: false,
    liveSearchStyle: 'contains',
    actionsBox: false,
    iconBase: classNames.ICONBASE,
    tickIcon: classNames.TICKICON,
    showTick: false,
    template: {
        caret: '<span class="caret"></span>'
    },
    maxOptions: false,
    mobile: false,
    selectOnTab: false,
    dropdownAlignRight: false,
    windowPadding: 0,
    virtualScroll: 600,
    display: false,
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist
}

/**
 * jQuery
 */

defineJQueryPlugin(Selectpicker)

export default Selectpicker