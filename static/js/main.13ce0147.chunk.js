(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        122: function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                o = a(59),
                i = a.n(o),
                c = a(2),
                l = a(3),
                s = a(5),
                m = a(4),
                d = a(6),
                u = (a(66), a(68), a(41)),
                p = a.n(u),
                h = (a(117), a(60)),
                f = a.n(h),
                v = a(54),
                b = a(55),
                y = a(56),
                w = a(57),
                g = a(58),
                E = function (e) {
                    function t() {
                        return Object(c.a)(this, t), Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(d.a)(t, e), Object(l.a)(t, [{
                        key: "render",
                        value: function () {
                            return [r.a.createElement("div", {
                                className: "row"
                            }, r.a.createElement("h3", {
                                className: "black right"
                            }, "AWARD")), v.award.map(function (e) {
                                return r.a.createElement("div", {
                                    className: "row"
                                }, r.a.createElement("h4", {
                                    className: "gray right"
                                }, null != e.value ? e.value : "".concat(e.mail, " <br> ").concat(e.cell)))
                            })]
                        }
                    }]), t
                }(n.Component),
                N = function (e) {
                    function t() {
                        return Object(c.a)(this, t), Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(d.a)(t, e), Object(l.a)(t, [{
                        key: "render",
                        value: function () {
                            return [r.a.createElement("div", {
                                className: "row"
                            }, r.a.createElement("h3", {
                                className: "black right"
                            }, "CERTIFICATION")), b.certification.map(function (e) {
                                return null != e.value ? r.a.createElement("div", {
                                    className: "row"
                                }, r.a.createElement("h4", {
                                    className: "gray right"
                                }, e.value)) : r.a.createElement("div", {
                                    className: "row"
                                }, r.a.createElement("h4", {
                                    className: "gray right"
                                }, e.mail, " ", r.a.createElement("br", null), " ", e.cell))
                            })]
                        }
                    }]), t
                }(n.Component),
                k = function (e) {
                    function t() {
                        return Object(c.a)(this, t), Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(d.a)(t, e), Object(l.a)(t, [{
                        key: "render",
                        value: function () {
                            return [r.a.createElement("div", {
                                className: "row"
                            }, r.a.createElement("h3", {
                                className: "black right"
                            }, "CONTACT")), y.contact.map(function (e) {
                                return null != e.value ? r.a.createElement("div", {
                                    className: "row"
                                }, r.a.createElement("h4", {
                                    className: "gray right"
                                }, e.value)) : r.a.createElement("div", {
                                    className: "row"
                                }, r.a.createElement("h4", {
                                    className: "gray right"
                                }, e.mail, " ", r.a.createElement("br", null), " ", e.cell))
                            })]
                        }
                    }]), t
                }(n.Component),
                I = function (e) {
                    function t() {
                        return Object(c.a)(this, t), Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(d.a)(t, e), Object(l.a)(t, [{
                        key: "render",
                        value: function () {
                            return r.a.createElement("div", {
                                className: "col-3"
                            }, r.a.createElement("div", {
                                id: "experience",
                                className: "container"
                            }, r.a.createElement("div", {
                                className: "row"
                            }, r.a.createElement("h3", {
                                className: "black left"
                            }, "EXPERIENCE")), w.experience.map(function (e) {
                                return [r.a.createElement("div", {
                                    className: "row"
                                }, r.a.createElement("h3", {
                                    className: "gray left"
                                }, e.period)), r.a.createElement("div", {
                                    className: "row"
                                }, r.a.createElement("h3", {
                                    className: "black left"
                                }, e.company), r.a.createElement("h4", {
                                    className: "gray left"
                                }, e.position, r.a.createElement("br", null), e.description))]
                            })))
                        }
                    }]), t
                }(n.Component),
                O = function (e) {
                    function t() {
                        return Object(c.a)(this, t), Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(d.a)(t, e), Object(l.a)(t, [{
                        key: "render",
                        value: function () {
                            return r.a.createElement("div", {
                                id: "formation",
                                className: "container"
                            }, r.a.createElement("div", {
                                className: "row "
                            }, r.a.createElement("h3", {
                                className: "black right"
                            }, "EDUCATION")), g.formation.map(function (e) {
                                return [r.a.createElement("div", {
                                    className: "row"
                                }, r.a.createElement("h3", {
                                    className: "gray right"
                                }, e.period)), r.a.createElement("div", {
                                    className: "row"
                                }, r.a.createElement("h3", {
                                    className: "black right"
                                }, e.company), r.a.createElement("h4", {
                                    className: "gray right"
                                }, e.position, r.a.createElement("br", null), e.description))]
                            }))
                        }
                    }]), t
                }(n.Component),
                j = function (e) {
                    function t() {
                        return Object(c.a)(this, t), Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(d.a)(t, e), Object(l.a)(t, [{
                        key: "render",
                        value: function () {
                            return this.geolocation(), [r.a.createElement("div", {
                                className: "center title-container"
                            }, r.a.createElement("h1", {
                                className: "title black"
                            }, "RICCARDO AMADIO")), r.a.createElement("div", {
                                className: "center"
                            }, r.a.createElement("h3", {
                                className: "gray"
                            }, "Full-Stack Developer")), r.a.createElement("div", {
                                className: " center"
                            }, r.a.createElement("img", {
                                id: "img",
                                className: "profile-picture",
                                src: f.a,
                                alt: "Riccardo Amadio"
                            })), r.a.createElement("div", {
                                className: "center container"
                            }, r.a.createElement("div", {
                                className: "row h"
                            }, r.a.createElement(I, null), r.a.createElement("div", {
                                className: "vertical-line col-"
                            }), r.a.createElement("div", {
                                className: "col-2"
                            }, r.a.createElement("div", {
                                className: "container"
                            }, r.a.createElement("div", {
                                className: "row"
                            }, r.a.createElement(O, null)), r.a.createElement("div", {
                                className: "row"
                            }, r.a.createElement("div", {
                                id: "subcontainer",
                                className: "container"
                            }, r.a.createElement(N, null), r.a.createElement(E, null), r.a.createElement(k, null)))))))]
                        }
                    }, {
                        key: "geolocation",
                        value: function () {
                            p.a.initializeApp({
                                apiKey: "AIzaSyB7IA52cFpYfyQ4hYc3CU_XsFRwgkMHaCg",
                                authDomain: "visitors-aeb4b.firebaseapp.com",
                                databaseURL: "https://visitors-aeb4b.firebaseio.com",
                                projectId: "visitors-aeb4b",
                                storageBucket: "visitors-aeb4b.appspot.com",
                                messagingSenderId: "37669232163"
                            });
                            var e = p.a.firestore();
                            fetch("https://ipapi.co/json").then(function (e) {
                                return e.text()
                            }).then(function (e) {
                                return JSON.parse(e)
                            }).then(function (t) {
                                return t.date = new Date, e.collection("visitatori").add(t).then(function (e) {
                                    return e
                                }).catch(function (e) {
                                    return e
                                })
                            }).catch(function (e) {
                                return e
                            })
                        }
                    }]), t
                }(n.Component),
                C = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function S(e, t) {
                navigator.serviceWorker.register(e).then(function (e) {
                    e.onupdatefound = function () {
                        var a = e.installing;
                        null != a && (a.onstatechange = function () {
                            "installed" === a.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."), t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(e)))
                        })
                    }
                }).catch(function (e) {
                    console.error("Error during service worker registration:", e)
                })
            }
            i.a.render(r.a.createElement(j, null), document.getElementById("root")),
                function (e) {
                    if ("serviceWorker" in navigator) {
                        if (new URL("", window.location.href).origin !== window.location.origin) return;
                        window.addEventListener("load", function () {
                            var t = "".concat("", "/service-worker.js");
                            C ? (function (e, t) {
                                fetch(e).then(function (a) {
                                    var n = a.headers.get("content-type");
                                    404 === a.status || null != n && -1 === n.indexOf("javascript") ? navigator.serviceWorker.ready.then(function (e) {
                                        e.unregister().then(function () {
                                            window.location.reload()
                                        })
                                    }) : S(e, t)
                                }).catch(function () {
                                    console.log("No internet connection found. App is running in offline mode.")
                                })
                            }(t, e), navigator.serviceWorker.ready.then(function () {
                                console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")
                            })) : S(t, e)
                        })
                    }
                }()
        },
        54: function (e, t) {
            t.award = [{
                value: "First Award at the HackDisabilities 2015"
            }]
        },
        55: function (e, t) {
            t.certification = [{
                value: "Course of TDD and Unit Testing with Javascript from DevMarche Community"
            }, {
                value: "Google Developer Challenge Scholarship 2017 on Udacity like Mobile Web Specialist (November 2017 - February 2018)"
            }]
        },
        56: function (e, t) {
            t.contact = [{
                mail: "riccardo.amadio1@gmail.com",
                cell: "+39 3461871698"
            }]
        },
        57: function (e, t) {
            t.experience = [
                {
                    period: "Jul 2021 - Mar 2023",
                    company: "AgileLab",
                    position: "Big Data Engineer III",
                    description: "Coaching and Mentor new Data Engineers. Speaker and Teacher of Data Orchestrator, Modern Data Stack, Iceberg, Data Platform (PyData,CodeOverCommunity,DataBerlin,PythonMilan). Design and Implement for Fashion Company a Data Lakehouse for Analytics and AI team (Airflow,Spark,Iceberg,DeltaLake,Tableu,Databricks,dbt-athena,AWS). Integrate Data Governance using AWS Glue and Databricks Unity Catalog. Design and Implement a Data Platform for Luxury customer to replace enterprise datawarehouse (Airflow,Spark,Iceberg,Tableu,dbt-athena,AWS,Terraform,Karpenter,OpenTelemetry,Prometheus)"
                },
                {
                    period: "Jul 2021 - Mar 2023",
                    company: "Capgemini",
                    position: "Senior Data Engineer",
                    description: "Conversional Chatbot and Transfer Learning (Dialoglow,LUIS Microsoft) [TIM]. Computer Vision with AWS Sagemaker,PyTorch,OpenCV [Capgemini PoC] . IaaC Architecture for Data Engineer team with Composer, Airflow, BigQuery, Terraform,Grafana.[Generali Advanced Analytics]. Pipeline development and TimeSeries Forecast with PySpark and Palantir Foundry [Unicredit]. Pipeline Orchestration and Development with Dagster,PySpark, OpenShift in an On-Premise Environment [Leonardo Helicopter]."
                },
                {
                    period: "Dic 2020 - Nov 2022",
                    company: "University of Pisa",
                    position: "Contract AI Researcher",
                    description: "Taxonomy Search Engine applied to knowledge on Industry 4.0 from academics articles. Using Graph Recommend System and Information Retrieval techniques to creates a Search Engine. Topic modeling of academic articles to create a data-driven learning platform for industry and university on arguments like Artificial Intelligence and Industry 4.0. Practical Learning of Artificial Intelligence on the Edge for Industry 4.0 (PLANET4)."
                },
                {
                    period: "Jul 2020 - Dic 2020",
                    company: "Ammagamma",
                    position: "Contract Cloud Data Engineer",
                    description: "Engineering and speedup the process of development using Cloud Solutions and building custom libraries for Data Scientists. Write python modules for speedup Data Science and ML task. Creations of Cloud Solutions,Data Platforms and resolving problems of optimization for supply chain company."
                },{
                period: "May 2019 - September 2019",
                company: "Amazon DE",
                position: "Data Engineer Intern",
                description: "I work in the ICQA Department for developing a platform for show reports,statistics,graphs using Ruby on Rails and React . I used many tools and API of the AWS like SQS,SNS, Glue,CloudWatch,Redshift,EC2,DynamoDB and also I created and used API and library for ticketing system, data-failure and user-visit."
            },{
                period: "May 2017 - May 2018",
                company: "Regione Marche",
                position: "Full Stack Web Developer",
                description: "I developed an application for countability of earthquake. I choose to use Node JS, SQL Server, Polymer for the facility of building microservices and C.R.U.D. operations.In the meanwhile, I developed some modules for Cohesion, with ASP NET 4, Bootstrap and jQuery."
            }, {
                period: "May 2016 - Oct 2017",
                company: "MyHomeAgenda",
                position: "CTO & Co-Founder",
                description: "In this experience I increased my skills of team working and manager of a team . I created new way of work to increase the production of the team. I actually working with Polymer and NodeJS , but we had some part of the project created with ReactJS . In this project I increase my skills with micro-services (with Seneca and Hapi) and with NoSQL database (MongoDB)."
            }, {
                period: "November 2015 - May 2016",
                company: "Freelance",
                position: "Full Stack Developer",
                description: "I created an Invite System for Prestashop where customers can invite other customer with a code. I used Paypal and Stripe to create payment and payouts ."
            }, {
                period: "May 2015 - October 2015",
                company: "KeyCover",
                position: "Founder KeyCover",
                description: "I created the first cover-keyboard designed for blind people. It is a braille keyboard with 8 keys, suitable for any kind of smartphone. I created this board in a Hackathon made by Codemotion for NeoMobile and after we won the competition and after I took part to the Rome Maker Faire with this project."
            }, {
                period: "January 2015 - September 2015",
                company: "Unifacile",
                position: "Junior Full Stack Developer",
                description: "I grown my skills of Web Developer and I worked to new API for the back-end of the platform with Symfony. I learn Angular for the first time and I created many pages for new feature of the platform. I increased my skills of team working and management."
            }, {
                period: "May 2014 - February 2015",
                company: "Elite s.c.p.a.",
                position: "Android Developer",
                description: "In this experience I developed an application for domotic house.The objective of this application was to control the TV and show some alert. I learned new skills of Android like the communication from devices and the UI of an application."
            }]
        },
        58: function (e, t) {
            t.formation = [{
                period: "September 2009 - June 2014",
                position: "Computer Science Expert",
                company: 'I.T.I.S. "G.MARCONI" JESI',
                description: "Obtained the IT Expert degree with 75/100."
            }, {
                period: "October 2015 - April 2019",
                position: "Doctor of Computer Science",
                company: "University of Camerino",
                description: "Graduated in Computer Science at the University of Camerino. With a thesis on the Design Pattern for Evolutive Objects with Prof Rosario Culmone."
            },
            {
                period: "October 2019 - Present",
                position: "Doctor of Computer Science in Artificial Intelligence",
                company: "University of Pisa",
                description: "I'm graduating in Computer Science with a curriculum in Artificial Intelligence at the University of Pisa."
            }]
        },
        60: function (e, t, a) {
            e.exports = a.p + "static/media/profilo.c67fcb70.png"
        },
        61: function (e, t, a) {
            e.exports = a(122)
        },
        66: function (e, t, a) {},
        68: function (e, t, a) {}
    },
    [
        [61, 2, 1]
    ]
]);
//# sourceMappingURL=main.13ce0147.chunk.js.map