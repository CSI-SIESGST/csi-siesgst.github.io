        $(function () {
            new TypeIt('.Intro__heading-main__box-content', {
                    speed: 100,
                    loop: false
                })
                .type('CSI-SIESGST')
                .pause(600)
                .options({
                    speed: 500
                })
                .delete(11)
                .options({
                    speed: 50
                })
                .pause(300)
                .type('Welcome To Innovation 2020!')
                .pause(500)
                .options({
                    speed: 300
                })
                .delete(27)
                .options({
                    speed: 50
                })
                .type('Register Your Team!')
                .pause(500)
                .options({
                    speed: 300
                })
                // .delete(69)
                // .options({
                //     speed: 60
                // })
        });
