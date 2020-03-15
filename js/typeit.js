        $(function () {
            new TypeIt('.Intro__heading-main__box-content', {
                    speed: 90,
                    loop: false,
                //     waitUntilVisible: true
                })
                .type('Welcome to')
                .pause(500)
                .break()
                .type('CSI-SIESGST')
                // .pause(400)
                // .delete(3)
                // .type('20!')
                // .pause(300)
        });
