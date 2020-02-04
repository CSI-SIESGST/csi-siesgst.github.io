        $(function () {
            new TypeIt('.Intro__heading-main__box-content', {
                    speed: 90,
                    loop: false,
                //     waitUntilVisible: true
                })
                .type('CSI-SIESGST')
                .pause(500)
                .break()
                .type('Welcomes You To Innovation 2k19!')
                .pause(400)
                .delete(3)
                .type('20!')
                .pause(300)
                .break()
                .type('Register Your Team!')
                .pause(300)
        });
