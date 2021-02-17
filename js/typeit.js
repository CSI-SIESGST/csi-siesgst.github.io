        $(function () {
            new TypeIt('.Intro__heading-main__box-content', {
                    speed: 60,
                    loop: false,
                    waitUntilVisible: true
                })
                .type('WELCOME TO')
                .pause(500)
                .break()
                .type('💻CSI-SIESGST💻')
                .go()
        });
