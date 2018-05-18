ymaps.ready(init);

function init() {

    var geolocation = ymaps.geolocation,

        myMap = new ymaps.Map('map', {

            center: [53.355084, 83.769948],

            zoom: 10

        }, {

            searchControlProvider: 'yandex#search'

        });
    geolocation.get({

        provider: 'browser',

        mapStateAutoApply: true

    }).then(function (result) {

        // Синим цветом пометим положение, полученное через браузер.

        // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.

        result.geoObjects.options.set('preset', 'islands#blueCircleIcon')

        myMap.geoObjects.add(result.geoObjects);

    });

}