        $(function () {
            new TypeIt('.Intro__heading-main__box-content', {
                    speed: 90,
                    loop: false,
                //     waitUntilVisible: true
                })
                .type('CSI Campus Chapter')
                .pause(500)
                .break()
                .type('SIESGST')
                .pause(400)
                // .delete(3)
                // .type('20!')
                // .pause(300)
        });
