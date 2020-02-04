        $(function () {
            new TypeIt('.Intro__heading-main__box-content', {
                    speed: 100,
                    loop: false,
                    waitUntilVisible: true
                })
                .type('CSI-SIESGST')
                .pause(500)
                .break()
                .type('Welcome To Innovation 2k19!')
                .pause(400)
                .delete(3)
                .type('20!')
                .pause(500)
                .break()
                .type('Register Your Team!')
                .pause(500)
        });
