KitchenSink.Form = function(params) {
    var viewModel = {
        autocomplete: {
            text: ko.observable(""),
            items: ["Shanghai", "Istanbul", "Singapore", "Mumbai", "Los Angeles", "Moscow", "Hong Kong", "Madrid", "Berlin", "Guangzhou", "Delhi", "Seoul"]
        },
        "switch": {
            value: ko.observable(true)
        },
        slider: {
            value: ko.observable(5)
        },
        rangeSlider: {
            minValue: ko.observable(3),
            maxValue: ko.observable(7),
        },
        lookup: {
            data: ["red", "green", "blue", "yellow"],
            value: ko.observable(null)
        },
        checkbox: {
            checked: ko.observable(false)
        }
    };

    return viewModel;
};