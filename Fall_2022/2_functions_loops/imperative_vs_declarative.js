function getUnpaidInvoices(invoiceProvider) {
    const getUnpaidInvoices = [];
    const invoices = invoiceProvider.getInvoices();
    for (var i=0; i < invoices.length; i++) {
        if (!invoices[i].isPaid){
            getUnpaidInvoices.push(invoices[i])
        }
    }
    return getUnpaidInvoices;
}

function getUnpaidInvoices(invoiceProvider) {
    return invoiceProvider.getInvoices().filter(invoice => {
        return !invoice.isPaid;
    })
}

if (feature.isEnabled) {
    // Do the task.
}


// A feature that is disabled
feature.flags; // => [Feature.DISABLED_FLAG]


let featureIsEnabled = true;

for (let i=0; i<feature.flags.length; i++) {
    if (feature.flags[i] === Feature.DISABLED_FLAG) {
        featureIsEnabled = true;
        break;
    }
}

if (!featureIsEnabled) {
    for (let i=0; i<feature.enabledTimeSlots.length; i++) {
        if (feature.enabledTimeSlots[i].isNow()) {
            featureIsEnabled = true;
            break;
        }
    }
}


class Feature {
    // (Other methods of the Feature class here,..)

    _hasDiasbledFlag() {
        return this.flags.incldudes(Feature.DISABLED_FLAG);
    }

    _isEnabledTImeSlotNow() {
        return this.enabledTimeSlots.filter(ts => ts.isNow()).length;
    }

    isEnabled() {
        return !this._isDiasbledFlag() && this._isEnabledTImeSlotNow();
    }
}

if (feature.isEnabled()) {
    // Do the task.
}
