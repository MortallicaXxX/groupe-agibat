
var box_messages = [
  {titre:'FÉLICITATION',message:"Votre demande de contact à été envoyée avec succès. Un consultant vous contactera dans les meilleurs délais."}, // contact x
  {titre:'FÉLICITATION',message:"Votre demande de rappel à été envoyer avec succès. Un conseiller vous rapellera dans les meilleurs délais."}, // rappel x
  {titre:'FÉLICITATION',message:"Votre demande d'eligibilité à été envoyer avec succès. Un conseiller prendra contact avec vous dans les meilleurs délais."}, // transmettre ma demande x
  {titre:'FÉLICITATION',message:"Nous avons bien reçus vos informations. Nous allons prochainement revenir vers vous par téléphone."}, // déperditions
  // Messages d'erreur
  {titre:'ERREUR',message:"<alert>Désoler mais les champs requis n'ont pas été encoder</alert>"},
  {titre:'ERREUR',message:"<alert>Désoler mais les champs à étoile* n'ont pas été encoder</alert>"},
  {titre:'ERREUR',message:"<alert>Désoler mais les condition générale CGU n'ont pas été cochée</alert>"},
]

function alertBox(id){
  return builder(document.getElementsByTagName('body')[0],[
    {
      type:'div',
      prop:{
        id:'box',
        name:'alert_box',
        style:'height:'+screen.stats.height+'px;',
      },
      childrens:[
        {
          type:'div',
          prop:{
            name:'boxContainer'
          },
          childrens:[
            {
              type:'div',
              prop:{
                name:'delete'
              },
              childrens:[
                {
                  type:'div',
                  prop:{
                    class:'btn',
                    name:'annuler',
                    onclick:'closeBox()'
                  },
                }
              ]
            },
            {
              type:'div',
              prop:{
                name:'info',
                text:"<h1>"+box_messages[id].titre+"</h1>"}
            },
            {
              type:'p',
              prop:{
                name:'message',
                text:box_messages[id].message}
            },
          ]
        }
      ]
    }
  ])
}

var guiLoader = async function(){

var question_projet = { // question_projet
  type:'div',
  prop:{name:'question_projet'},
  childrens:[
      {
        type:'p',
        prop:{text:'Une question, un projet ?'}
      },
      {type:'div',prop:{name:'btn',onclick:"openBox('contact')",text:'<p>Nous contacter</p>'}},
      {type:'div',prop:{name:'btn',onclick:"openBox('rappel')",text:'<p>Être rappelé</p>'}},
      {type:'div',prop:{name:'img-call'}},
      {type:'div',prop:{name:'img-familly'}},
  ]
};
var footer = { // footer
    type:'div',
    prop:{
      name:'footer',
      class:'subContainer',
      // style:'height:'+screen.stats.height+'px;width:'+screen.stats.width+'px',
    },
    childrens:[
      { // infos
        type:'div',
        prop:{
          name:"infos",
          text:'<div></div>'
        },
      },
      { // .fr
        type:'div',
        prop:{

        },
        childrens:[
          // {
          //   type:'p',
          //   prop:{
          //     text:'agibat.fr',
          //     name:'subFooterTitre'
          //   }
          // },
          {
            type:'p',
            prop:{
              text:'Accueil',
              name:'subFooterTitre',
              onclick:'changePage("index")',
              style:'cursor: pointer;'
            }
          },
          {
            type:'p',
            prop:{
              text:'Nous connaître',
            }
          },
          {
            type:'p',
            prop:{
              text:'Nous contacter',
              onclick:'openBox("contact")',
              style:'cursor: pointer;'
            }
          },
          {
            type:'p',
            prop:{
              text:'05 63 74 54 99',
            }
          }
        ]
      },
      { // le groupe
        type:'div',
        prop:{

        },
        childrens:[
          {
            type:'p',
            prop:{
              text:'GROUPE AGIBAT',
              name:'subFooterTitre'
            }
          },
          {
            type:'p',
            prop:{
              text:'Performance énergétique',
              onclick:'changePage("performance_energetique")',
              style:'cursor: pointer;'
            }
          },
          {
            type:'p',
            prop:{
              text:'Énergies renouvelables',
              onclick:'changePage("energies_renouvelables")',
              style:'cursor: pointer;'
            }
          },
          {
            type:'p',
            prop:{
              text:'Rénovation habitat',
              onclick:'changePage("renovation_habitat")',
              style:'cursor: pointer;'
            }
          }
        ]
      },
      { // agence
        type:'div',
        prop:{

        },
        childrens:[
          {
            type:'p',
            prop:{
              text:'Nos agences',
              name:'subFooterTitre'
            }
          },
          {
            type:'p',
            prop:{
              text:'Castres',
            }
          }
        ]
      },
      { // social
        type:'div',
        prop:{

        },
        childrens:[
          {
            type:'p',
            prop:{
              text:'Nous suivre',
              name:'subFooterTitre'
            }
          },
          {
            type:'p',
            prop:{
              text:'Facebook',
            }
          },
          {
            type:'p',
            prop:{
              text:'Instagram',
            }
          },
          {
            type:'p',
            prop:{
              text:'Linkedin',
            }
          }
        ]
      },
      {
        type:'div',prop:{name:'production'},childrens:[
          {type:'p',prop:{text:'Copyright AGIBAT 2020® <span style="font-size:0.5vw;">Conception Odyssee</span>'}},
          {type:'div',prop:{name:'logo'}},
        ]
      }
    ]
  };

  return {
    headband : [ // headband
      {
        type:'div',
        prop:{
          id:'headband',
          class:'active'
        },
        childrens:[
          { // logo
            type:'div',
            prop:{
              name:'logo',
              class:'active',
              onclick:'changePage("index")',
              value:0
            }
          },
          { //Performance énergetique
            type:'div',
            prop:{
              class:'mainBtn',
              onclick:'changePage("performance_energetique")',
              value:1
            },
            childrens:[
              {
                type:'p',
                prop:{
                  text:'Performance Énergétique'
                }
              },
              {
                type:'div',prop:{name:'roll'}
              }
            ]
          },
          { // subMenu
            type:'div',
            prop:{
              class:'subMenu',
              value:1
            },
            childrens:[
              {
                type:'div',
                prop:{
                  name:'guide_arrow'
                }
              },
              {
                type:'div',
                prop:{name:'btnContainer',value:'0',row:0,onclick:"changePage_link('performance_energetique',24)"},
                childrens:[
                  {type:'div',
                  prop:{name:'btn'},
                  childrens:[
                    {
                      type:'p',
                      prop:{text:'Isolation combles perdus',class:'phantome'}
                    }
                  ]}
                ]
              },
              {
                type:'div',
                prop:{name:'btnContainer',value:'0',row:1,onclick:"changePage_link('performance_energetique',46)"},
                childrens:[
                  {type:'div',
                  prop:{name:'btn'},
                  childrens:[
                    {
                      type:'p',
                      prop:{text:"Isolation par l'intérieur",class:'phantome'}
                    }
                  ]}
                ]
              },
              {
                type:'div',
                prop:{name:'btnContainer',value:'1',row:0,onclick:"changePage_link('performance_energetique',35)"},
                childrens:[
                  {type:'div',
                  prop:{name:'btn'},
                  childrens:[
                    {
                      type:'p',
                      prop:{text:'Isolation combles rampants',class:'phantome'}
                    }
                  ]}
                ]
              },
              {
                type:'div',
                prop:{name:'btnContainer',value:'1',row:1,onclick:"changePage_link('performance_energetique',57)"},
                childrens:[
                  {type:'div',
                  prop:{name:'btn'},
                  childrens:[
                    {
                      type:'p',
                      prop:{text:"Isolation par l'extérieur",class:'phantome'}
                    }
                  ]}
                ]
              },
              {
                type:'div',
                prop:{name:'btnContainer',value:'2',row:0,onclick:"changePage_link('performance_energetique',79)"},
                childrens:[
                  {type:'div',
                  prop:{name:'btn'},
                  childrens:[
                    {
                      type:'p',
                      prop:{text:'Isolation plancher bas',class:'phantome'}
                    }
                  ]}
                ]
              },
              {
                type:'div',
                prop:{name:'btnContainer',value:'2',row:1,onclick:"changePage_link('performance_energetique',68)"},
                childrens:[
                  {type:'div',
                  prop:{name:'btn'},
                  childrens:[
                    {
                      type:'p',
                      prop:{text:'Isolation des menuiseries',class:'phantome'}
                    }
                  ]}
                ]
              }
            ]
          },
          { // Énergies renouvelables
            type:'div',
            prop:{
              class:'mainBtn',
              onclick:'changePage("energies_renouvelables")',
              value:2
            },
            childrens:[
              {
                type:'p',
                prop:{
                  text:'Énergies Renouvelables'
                }
              },
              {
                type:'div',prop:{name:'roll'}
              }
            ]
          },
          { // subMenu
            type:'div',
            prop:{
              class:'subMenu',
              value:2
            },
            childrens:[
              {
                type:'div',
                prop:{
                  name:'guide_arrow'
                }
              },
              {type:'div',
              prop:{name:'btnContainer',value:'0',row:0,onclick:"changePage_link('energies_renouvelables',24)"},
              childrens:[
                {type:'div',
                prop:{name:'btn'},
                childrens:[
                  {
                    type:'p',
                    prop:{text:'Pompe à chaleur AIR/EAU',class:'phantome',value:'0',row:0}
                  }
                ]}
              ]},
              {type:'div',
              prop:{name:'btnContainer',value:'0',row:1,onclick:"changePage_link('energies_renouvelables',68)"},
              childrens:[
                {type:'div',
                prop:{name:'btn'},
                childrens:[
                  {
                    type:'p',
                    prop:{text:'Poêle à bois/granulé',class:'phantome',value:'0',row:1}
                  }
                ]}
              ]},
              {type:'div',
              prop:{name:'btnContainer',value:'1',row:0,onclick:"changePage_link('energies_renouvelables',35)"},
              childrens:[
                {type:'div',
                prop:{name:'btn'},
                childrens:[
                  {
                    type:'p',
                    prop:{text:'Climatiseur réversible AIR/AIR',class:'phantome',value:'1',row:0}
                  }
                ]}
              ]},
              {type:'div',
              prop:{name:'btnContainer',value:'1',row:1,onclick:"changePage_link('energies_renouvelables',79)"},
              childrens:[
                {type:'div',
                prop:{name:'btn'},
                childrens:[
                  {
                    type:'p',
                    prop:{text:'Solaire photovoltaïque',class:'phantome',value:'1',row:1}
                  }
                ]}
              ]},
              {type:'div',
              prop:{name:'btnContainer',value:'2',row:0,onclick:"changePage_link('energies_renouvelables',46)"},
              childrens:[
                {type:'div',
                prop:{name:'btn'},
                childrens:[
                  {
                    type:'p',
                    prop:{text:'Chauffe-eau thermodynamique',class:'phantome',value:'2',row:0}
                  }
                ]},
              ]},
              {type:'div',
              prop:{name:'btnContainer',value:'2',row:1,onclick:"changePage_link('energies_renouvelables',57)"},
              childrens:[
                {type:'div',
                prop:{name:'btn'},
                childrens:[
                  {
                    type:'p',
                    prop:{text:'Chauffe-eau solaire',class:'phantome',value:'2',row:1}
                  }
                ]}
              ]}
            ]
          },
          { // Rénovation habitat
            type:'div',
            prop:{
              class:'mainBtn',
              onclick:'changePage("renovation_habitat")',
              value:3
            },
            childrens:[
              {
                type:'p',
                prop:{
                  text:"Rénovation Entretien"
                }
              },
              {
                type:'div',prop:{name:'roll'}
              }
            ]
          },
          { // subMenu
            type:'div',
            prop:{
              class:'subMenu',
              value:3
            },
            childrens:[
              {
                type:'div',
                prop:{
                  name:'guide_arrow'
                }
              },
              {type:'div',
              prop:{name:'btnContainer',value:'0',row:0,onclick:"changePage_link('renovation_habitat',24)"},
              childrens:[
                {type:'div',
                prop:{name:'btn'},
                childrens:[
                  {
                    type:'p',
                    prop:{text:'Réfection toiture',class:'phantome'}
                  }
                ]}
              ]},
              {type:'div',
              prop:{name:'btnContainer',value:'0',row:1,onclick:"changePage_link('renovation_habitat',57)"},
              childrens:[
                {type:'div',
                prop:{name:'btn'},
                childrens:[
                  {
                    type:'p',
                    prop:{text:'Traitement de bois',class:'phantome'}
                  }
                ]}
              ]},
              {type:'div',
              prop:{name:'btnContainer',value:'1',row:0,onclick:"changePage_link('renovation_habitat',46)"},
              childrens:[
                {type:'div',
                prop:{name:'btn'},
                childrens:[
                  {
                    type:'p',
                    prop:{text:'Zinguerie',class:'phantome'}
                  }
                ]}
              ]},
              {type:'div',
              prop:{name:'btnContainer',value:'1',row:1,onclick:"changePage_link('renovation_habitat',68)"},
              childrens:[
                {type:'div',
                prop:{name:'btn'},
                childrens:[
                  {
                    type:'p',
                    prop:{text:'Traitement de facades',class:'phantome'}
                  }
                ]}
              ]},
              {type:'div',
              prop:{name:'btnContainer',value:'2',row:0,onclick:"changePage_link('renovation_habitat',35)"},
              childrens:[
                {type:'div',
                prop:{name:'btn'},
                childrens:[
                  {
                    type:'p',
                    prop:{text:'Traitement de toîture',class:'phantome'}
                  }
                ]}
              ]},
              {type:'div',
              prop:{name:'btnContainer',value:'2',row:1,onclick:"changePage_link('renovation_habitat',79)"},
              childrens:[
                {type:'div',
                prop:{name:'btn'},
                childrens:[
                  {
                    type:'p',
                    prop:{text:'Enduits de façades',class:'phantome'}
                  }
                ]}
              ]}
            ]
          },
          { // aide
            type:'div',
            prop:{
              class:'mainBtn',
              onclick:'changePage("aides")',
              value:4
            },
            childrens:[
              {
                type:'div',
                prop:{
                  class:'subButon',
                  name:'aide',
                },
                childrens:[
                  {
                    type:'p',
                    prop:{
                      text:"Aides & Subventions"
                    }
                  },
                ]
              }
            ]
          },
          { // contact
            type:'div',
            prop:{
              class:'mainBtn',
              onclick:'openBox("contact")',
              value:5
            },
            childrens:[
              {
                type:'div',
                prop:{
                  class:'subButon',
                  name:'contact',
                },
                childrens:[
                  {
                    type:'p',
                    prop:{
                      text:"Contactez Nous"
                    }
                  },
                ]
              }
            ]
          },
        ]
      }
    ],
    index : [ // index
      {
        type:'div',
        prop:{
          id : 'container',
          name:'index'
        },
        childrens:[
          { // header
            type:'div',
            prop:{
              name:'header',
              class:'subContainer',
              style:'height:'+(screen.stats.height*0.9)+'px;',
            },
            childrens:[
              { // partie de gauche
                type:'div',
                prop:{
                  name:'left'
                },
                childrens:[
                  {
                    type:'h1',
                    prop:{
                      text:'GROUPE AGIBAT',
                    }
                  },
                  {
                    type:'div',
                    prop:{name:'desc'},
                    childrens:[
                      {
                        type:'h2',
                        prop:{
                          text:"Vous accompagne dans votre projet de rénovation et d'amélioration.",
                        }
                      },
                      {
                        type:'p',
                        prop:{
                          text:"Entreprise locale à taille humaine, implantée entre Castres et Revel.",
                        }
                      },
                      {
                        type:'p',
                        prop:{
                          text:"Expert en évaluation énergétique et en rénovation de l'habitat.",
                        }
                      },
                      {
                        type:'p',
                        prop:{
                          text:"Intervenant sur l'ensemble du territoire d'Occitanie.",
                        }
                      },
                    ]
                  },
                  {
                    type:'h2',
                    prop:{
                      text:'Que voulez-vous faire ?',
                    }
                  },
                  {
                    type:'div',
                    prop:{
                      name:'btn',
                    },
                    childrens:[
                      {
                        type:'p',
                        prop:{
                          text:'Je simule mon diagnostic',
                          onclick:"openBox('diagnostic')",
                          name:'title'
                        },
                      },
                    ]
                  },
                  {
                    type:'div',
                    prop:{
                      name:'btn',
                    },
                    childrens:[
                      {
                        type:'p',
                        prop:{
                          text:"J'évalue les déperditions d'une maison",
                          onclick:'scrollLink(32)',
                          name:'title'
                        },
                      },
                    ]
                  }
                ]
              },
              { // partie de droite
                type:'div',
                prop:{
                  name:'right'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'diapo-arrow'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{name:'left',id:"-1",onclick:'diapo_switch(this)'}
                      },
                      {
                        type:'div',
                        prop:{name:'right',id:'1',onclick:'diapo_switch(this)'}
                      }
                    ]
                  },
                  {
                    type:'div',
                    prop:{
                      name:'custom-scroller'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{name:'point_container'},
                      },
                    ]
                  },
                ]
              }
            ]
          },
          { // services
            type:'div',
            prop:{
              id:'services',
              name:'services',
              class:'subContainer',
              // style:'height:'+screen.stats.height+'px;',
            },
            childrens:[
              { //performance energentique
                type:'div',
                prop:{
                  class : 'services',
                  name:'performance_energentique',
                  value:0,
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'imgService'
                    }
                  },
                  {
                    type:'h2',
                    prop:{text:'Performance énergétique'}
                  },
                  {
                    type:'div',
                    prop:{
                      name:'btn'
                    },
                    childrens:[
                      {
                        type:'p',
                        prop:{
                          text:'Je veux :'
                        }
                      },
                      {
                        type:'div',
                        prop:{
                          name:'dropDownServices',
                          onclick:'turnActive(document.getElementById("services").children[1],null,closeAllActiveExeption(document.getElementById("services"),{value:0}))'
                        },
                        childrens:[
                          {
                            type:'div',
                          }
                        ]
                      },
                    ]
                  }
                ]
              },
              { // desc service 1
                type:'div',
                prop:{
                  name:'desc',
                  value:0,
                },
                childrens:[
                  {
                    type:'div',
                    prop:{text:'<p>Isoler mes combles perdus</p>',onclick:"changePage_link('performance_energetique',24)"}
                  },
                  {
                    type:'div',
                    prop:{text:'<p>Isoler mes combles rampants</p>',onclick:"changePage_link('performance_energetique',35)"}
                  },
                  {
                    type:'div',
                    prop:{text:"<p>Isoler mes murs par l'interieur</p>",onclick:"changePage_link('performance_energetique',46)"}
                  },
                  {
                    type:'div',
                    prop:{text:"<p>Isoler mes murs par l'extérieur</p>",onclick:"changePage_link('performance_energetique',57)"}
                  },
                  {
                    type:'div',
                    prop:{text:'<p>Isoler mon sous-sol</p>',onclick:"changePage_link('performance_energetique',79)"}
                  },
                  {
                    type:'div',
                    prop:{text:'<p>Changer mes menuiseries</p>',onclick:"changePage_link('performance_energetique',68)"}
                  },
                  {
                    type:'div',
                    prop:{text:'<p>Un diagnostic</p>',onclick:"openBox('diagnostic')",name:'btn',value:0}
                  },
                  {
                    type:'div',
                    prop:{text:'<p>Être rappelé</p>',onclick:"openBox('contact')",name:'btn',value:1}
                  }
                ]
              },
              { //Energies renouvlables
                type:'div',
                prop:{
                  class : 'services',
                  name:'energies_renouvelables',
                  value:1
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'imgService'
                    }
                  },
                  {
                    type:'h2',
                    prop:{text:'Énergies renouvelables'}
                  },
                  {
                    type:'div',
                    prop:{
                      name:'btn'
                    },
                    childrens:[
                      {
                        type:'p',
                        prop:{
                          text:'Je veux :'
                        }
                      },
                      {
                        type:'div',
                        prop:{
                          name:'dropDownServices',
                          onclick:'turnActive(document.getElementById("services").children[3],null,closeAllActiveExeption(document.getElementById("services"),{value:1}))'
                        },
                        childrens:[
                          {
                            type:'div',
                          }
                        ]
                      },
                    ]
                  }
                ]
              },
              { // desc service 2
                type:'div',
                prop:{
                  name:'desc',
                  value:1,
                },
                childrens:[
                  {
                    type:'div',
                    prop:{text:'<p>Remplacer ma chaudière</p>',class:'phantome',onclick:"changePage_link('energies_renouvelables',24)"}
                  },
                  {
                    type:'div',
                    prop:{text:'<p>Rafraichir ma maison</p>',class:'phantome',onclick:"changePage_link('energies_renouvelables',35)"}
                  },
                  {
                    type:'div',
                    prop:{text:"<p>Chauffer l'eau de ma maison</p>",class:'phantome',onclick:"changePage_link('energies_renouvelables',46)"}
                  },
                  {
                    type:'div',
                    prop:{text:"<p>Chauffer mon eau grâce au soleil</p>",class:'phantome',onclick:"changePage_link('energies_renouvelables',57)"}
                  },
                  {
                    type:'div',
                    prop:{text:'<p>Chauffer ma maison au bois</p>',class:'phantome',onclick:"changePage_link('energies_renouvelables',68)"}
                  },
                  {
                    type:'div',
                    prop:{text:'<p>Produire mon électricité</p>',class:'phantome',onclick:"changePage_link('energies_renouvelables',79)"}
                  },
                  {
                    type:'div',
                    prop:{text:'<p>Un diagnostic</p>',onclick:"openBox('diagnostic')",name:'btn',value:0}
                  },
                  {
                    type:'div',
                    prop:{text:'<p>Être rappelé</p>',onclick:"openBox('contact')",name:'btn',value:1}
                  }
                ]
              },
              { //Rénovation habitat
                type:'div',
                prop:{
                  class : 'services',
                  name:'renovation_habitat',
                  value:2
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'imgService'
                    }
                  },
                  {
                    type:'h2',
                    prop:{text:'Rénovation habitat'}
                  },
                  {
                    type:'div',
                    prop:{
                      name:'btn'
                    },
                    childrens:[
                      {
                        type:'p',
                        prop:{
                          text:'Je veux :'
                        }
                      },
                      {
                        type:'div',
                        prop:{
                          name:'dropDownServices',
                          onclick:'turnActive(document.getElementById("services").children[5],null,closeAllActiveExeption(document.getElementById("services"),{value:2}))'
                        },
                        childrens:[
                          {
                            type:'div',
                          }
                        ]
                      },
                    ]
                  }
                ]
              },
              { // desc service 3
                type:'div',
                prop:{
                  name:'desc',
                  value:2,
                },
                childrens:[
                  {
                    type:'div',
                    prop:{text:'<p>Refaire ma toiture</p>',class:'phantome',onclick:"changePage_link('renovation_habitat',24)"}
                  },
                  {
                    type:'div',
                    prop:{text:'<p>Assainir ma toiture</p>',class:'phantome',onclick:"changePage_link('renovation_habitat',35)"}
                  },
                  {
                    type:'div',
                    prop:{text:"<p>Contrôler l'étanchéité de ma toiture</p>",class:'phantome',onclick:"changePage_link('renovation_habitat',46)"}
                  },
                  {
                    type:'div',
                    prop:{text:'<p>Assainir ma charpente</p>',class:'phantome',onclick:"changePage_link('renovation_habitat',57)"}
                  },
                  {
                    type:'div',
                    prop:{text:'<p>Assainir ma façade</p>',class:'phantome',onclick:"changePage_link('renovation_habitat',68)"}
                  },
                  {
                    type:'div',
                    prop:{text:'<p>Refaire ma façade</p>',class:'phantome',onclick:"changePage_link('renovation_habitat',79)"}
                  },
                  {
                    type:'div',
                    prop:{text:'<p>Un diagnostic</p>',onclick:"openBox('diagnostic')",name:'btn',value:0}
                  },
                  {
                    type:'div',
                    prop:{text:'<p>Être rappelé</p>',onclick:"openBox('contact')",name:'btn',value:1}
                  }
                ]
              }
            ]
          },
          { // deperditions
            type:'div',
            prop:{
              id:'deperditions',
              name:'deperditions',
              class:'subContainer',
            },
            childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'intro'
                    },
                    childrens:[
                      {
                        type:'h1',
                        prop:{
                          text:"évaluer les déperditions d'une maison"
                        }
                      },
                      {
                        type:'p',
                        prop:{
                          text:"Aujourd'hui, limiter les déperditions d'une maison est essentiel et pour cause, <b>le chauffage est le 1er poste de consommation des foyers</b>, suivi par les <b>dépenses en ECS</b> (eau chaude sanitaire) puis par les <b>diverses consommations</b> électriques."
                        }
                      }
                    ]
                  },
                  {
                    type:'div',
                    prop:{
                      name:'left'
                    },
                  },
                  {
                    type:'div',
                    prop:{
                      name:'right'
                    },
                    childrens:[
                      {
                        type:'p',
                        prop:{
                          text:"Il existe en effet diverses solutions pour maîtriser la consommation d'une habitation : <b>isolation, énergie renouvelable, production d'énergie, etc</b>.<br>Évaluer la performance énergétique de votre habitation vous permet, de définir les axes d’améliorations à mettre en œuvre, afin de gagner en confort et réaliser d’importantes économies."
                        }
                      },
                      {
                        type:'p',
                        prop:{
                          text:"Plusieurs critères sont à examiner pour diagnostiquer votre maison :"
                        }
                      },
                      {
                        type:'ul',
                        childrens:[
                          {type:'li',prop:{text:"La zone climatique"}},
                          {type:'li',prop:{text:"La date de construction"}},
                          {type:'li',prop:{text:"La configuration de votre logement (surface, hauteur, orientation, organisation, nombre de personne, etc.)"}},
                          {type:'li',prop:{text:"Matériaux et matériels utilisés (types, dates, performance, etc.)"}},
                          {type:'li',prop:{text:"Rénovations effectuées (type de travaux, dates, matériaux utilisés, etc.)"}},
                        ]
                      }
                    ]
                  },
                  {
                    type:'p',
                    prop:{style:'grid-row:3;grid-column:1/3;margin:0;text-align:center;font-size: 1.5vw;font-weight: bold; background-color: var(--main-bckg-color-lightblue);color: white;margin-bottom: 0;padding-top: 1vw;',text:"En conclusion, chaque logement est un cas bien particulier qui possède ses propres atouts et faiblesses."}
                  },
                  {
                    type:'p',
                    prop:{style:'grid-row:4;grid-column:1/3;margin:0;margin-top:1vw;text-align:center;font-size: 1.5vw;font-weight: bold; background-color: var(--main-bckg-color-lightblue);color: white;margin-top: 0;padding-top: 1vw;padding-bottom: 1vw;',text:"Un diagnostic personnalisé composé d'un bilan énergétique va vous permettre d'identifier les zones de déperditions, les éléments énergivores et les optimisations réalisables pour votre maison."}
                  },
                  {
                    type:'div',
                    prop:{name:'arrow'}
                  }
            ]
          },
          { // Nos diagnostiques gratuits
            type:'div',
            prop:{
              name:'diagnostiques',
              class:'subContainer',
              style:'height:'+screen.stats.height+'px;',
            },
            childrens:[
              {
                type:'h1',prop:{text:'Nos diagnostics'}
              },
              { // Diagnostiques energetiques
                type:'div',
                prop:{
                  class:'diagnostiques',
                  name:'energetiques'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{name:'logo'},
                    childrens:[
                      {
                        type:'div',
                        prop:{
                          row:0,
                          line:0,
                          name:'title',
                        },
                        childrens:[
                          {
                            type:'p',
                            prop:{
                              text:'1'
                            }
                          }
                        ]
                      },
                      {
                        type:'p',
                        prop:{
                          row:0,
                          line:1,
                          text:'Commencez par <b>simuler votre diagnostic</b>'
                        }
                      },
                      {
                        type:'div',
                        prop:{
                          row:1,
                          line:0,
                          name:'title',
                        },
                        childrens:[
                          {
                            type:'p',
                            prop:{
                              text:'2'
                            }
                          }
                        ]
                      },
                      {
                        type:'p',
                        prop:{
                          row:1,
                          line:1,
                          text:"<b>Obtenez</b> le diagnostic et <b>un bilan énergétique</b>* qui vous permet de mieux comprendre le fonctionnement de votre habitation"
                        }
                      },
                      {
                        type:'div',
                        prop:{
                          row:2,
                          line:0,
                          name:'title',
                        },
                        childrens:[
                          {
                            type:'p',
                            prop:{
                              text:'3'
                            }
                          }
                        ]
                      },
                      {
                        type:'p',
                        prop:{
                          row:2,
                          line:1,
                          text:"<b>Recevez nos préconisations</b> de travaux selon le diagnostic réalisé, adapté à vos besoins et ceux de votre habitat"
                        }
                      },
                      {
                        type:'div',
                        prop:{
                          row:3,
                          line:0,
                          name:'title',
                        },
                        childrens:[
                          {
                            type:'p',
                            prop:{
                              text:'4'
                            }
                          }
                        ]
                      },
                      {
                        type:'p',
                        prop:{
                          row:3,
                          line:1,
                          text:"<b>Bénéficiez du calcul de vos aides/ subventions</b> et <b>de l'estimation de vos économies</b> générées (selon diagnostic et préconisations)"
                        }
                      },
                      {
                        type:'p',
                        prop:{
                          class:'nb',
                          text:"*Ce bilan ne remplace pas la réalisation d’un diagnostic de performance énergétique (DPE) fait par des organismes habilités."
                        }
                      },
                    ]
                  },
                  {
                    type:'div',
                    prop:{
                      name:'btn',
                      onclick:"openBox('diagnostic')",
                      text:'<p>Commencez ici</p>'
                    }
                  }
                ]
              }
            ]
          },
          { // Nos engagements
            type:'div',
            prop:{
              name:'engagements',
              class:'subContainer',
            },
            childrens:[
              // {
              //   type:'h1',prop:{text:'Nos engagements'}
              // },
              { //Des circuits courts privilégiés dans le choix de nos fournisseurs
                type:'div',
                prop:{
                  class : 'engagements',
                  name:'circuits',
                },
                childrens:[
                  {
                    type:'div',
                    prop:{name:'logo'}
                  },
                  {
                    type:'p',
                    prop:{
                      text:'Partenaires de proximité en circuit court'
                    }
                  }
                ]
              },
              { //Contrôle qualité des chantiers en interne
                type:'div',
                prop:{
                  class : 'engagements',
                  name:'qualite'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{name:'logo'}
                  },
                  {
                    type:'p',
                    prop:{
                      text:'Contrôle qualité des chantiers'
                    }
                  }
                ]
              },
              { //Des travaux réalisés par des Artisans RGE
                type:'div',
                prop:{
                  class : 'engagements',
                  name:'artisans'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{name:'logo'}
                  },
                  {
                    type:'p',
                    prop:{
                      text:"Équipes d'installateurs RGE"
                    }
                  }
                ]
              },
              { //Un interlocuteur unique pour l’ensemble de vos travaux
                type:'div',
                prop:{
                  class : 'engagements',
                  name:'interlocuteur'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{name:'logo'}
                  },
                  {
                    type:'p',
                    prop:{
                      text:'Consultant expert en habitat à votre écoute'
                    }
                  }
                ]
              },
              { //Un accompagnement dans vos démarches administratives et demandes de financement
                type:'div',
                prop:{
                  class : 'engagements',
                  name:'accompagnement'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{name:'logo'}
                  },
                  {
                    type:'p',
                    prop:{
                      text:'Accompagnement administratif'
                    }
                  }
                ]
              },
            ]
          },
          { // Nos promesses
            type:'div',
            prop:{
              name:'promesses',
              class:'subContainer',
            },
            childrens:[
              { //Des circuits courts privilégiés dans le choix de nos fournisseurs
                type:'div',
                prop:{
                  class : 'promesses',
                  name:'normes',
                },
                childrens:[
                  {
                    type:'div',
                    prop:{name:'logo'}
                  },
                  {
                    type:'p',
                    prop:{
                      text:'Des travaux exécutés dans les normes'
                    }
                  }
                ]
              },
              { //Contrôle qualité des chantiers en interne
                type:'div',
                prop:{
                  class : 'promesses',
                  name:'economie'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{name:'logo'}
                  },
                  {
                    type:'p',
                    prop:{
                      text:'Des économies concrètes'
                    }
                  }
                ]
              },
              { //Des travaux réalisés par des Artisans RGE
                type:'div',
                prop:{
                  class : 'promesses',
                  name:'confort'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{name:'logo'}
                  },
                  {
                    type:'p',
                    prop:{
                      text:'Un gain de confort au quotidien'
                    }
                  }
                ]
              }
            ]
          },
          question_projet,
          footer
        ]
      }
    ],
    performance_energetique : [
      {
        type:'div',
        prop:{
          id:'container',
          name:'performance_energetique',
        },
        childrens:[
          { // header
            type:'div',
            prop:{
              class:'subContainer',
              name:'header',
              style:'height : '+(screen.stats.height*0.9)+'px;'
            },
            childrens:[
              {
                type:'div',
                prop:{
                  name:'left'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      text:'<h1>PERFORMANCE</h1><h1>ÉNERGÉTIQUE</h1>'
                    }
                  },
                  {
                    type:'p',
                    prop:{name:"titre",text:"La quantité d'énergie consommée par votre habitat"}
                  },
                  {
                    type:'p',
                    prop:{text:"Améliorez la performance énergétique de votre logement, réduisez vos factures liées au chauffage/refroidissement et obtenez un confort thermique optimal."}
                  }
                ]
              },
              {
                type:'div',
                prop:{
                  name:'right'
                }
              }
            ]
          },
          { // services-liste
              type:'div',
              prop:{
                class:'subContainer',
                name:'services_liste',
                style:'height : '+screen.stats.height+'px;'
              },
              childrens:[
                // 24 35 46 57 68 79
                { // Isolation combles perdus
                  type:'div',
                  prop:{
                    class:'service',
                    name:'combles_perdus',
                    onclick:'scrollLink(24)'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'img'
                      }
                    },
                    {
                      type:'div',
                      prop:{
                        text:'<p>Isolation combles perdus</p>'
                      }
                    }
                  ]
                },
                { // Isolation combles rampant
                  type:'div',
                  prop:{
                    class:'service',
                    name:'combles_rampant',
                    onclick:'scrollLink(35)'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'img'
                      }
                    },
                    {
                      type:'div',
                      prop:{
                        text:'<p>Isolation combles rampants</p>'
                      }
                    }
                  ]
                },
                { // Isolation plancher
                  type:'div',
                  prop:{
                    class:'service',
                    name:'plancher',
                    onclick:'scrollLink(79)'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'img'
                      }
                    },
                    {
                      type:'div',
                      prop:{
                        text:'<p>Isolation plancher bas</p>'
                      }
                    }
                  ]
                },
                { // Isolation extérieur
                  type:'div',
                  prop:{
                    class:'service',
                    name:'exterieur',
                    onclick:'scrollLink(57)'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'img'
                      }
                    },
                    {
                      type:'div',
                      prop:{
                        text:'<p>Isolation extérieure</p>'
                      }
                    }
                  ]
                },
                { // Isolation intérieure
                  type:'div',
                  prop:{
                    class:'service',
                    name:'interieure',
                    onclick:'scrollLink(46)'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'img'
                      }
                    },
                    {
                      type:'div',
                      prop:{
                        text:'<p>Isolation intérieure</p>'
                      }
                    }
                  ]
                },
                { // Isolation des menuiseries
                  type:'div',
                  prop:{
                    class:'service',
                    name:'menuiseries',
                    onclick:'scrollLink(68)'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'img'
                      }
                    },
                    {
                      type:'div',
                      prop:{
                        text:'<p>Isolation des menuiseries</p>'
                      }
                    }
                  ]
                }
              ]
            },
          { // services
          type:'div',
          prop:{
            class:'subContainer',
            name:'services',
          },
          childrens:[
            { // Isolation combles perdus
              type:'div',
              prop:{
                class:'service',
                name:'combles_perdus',
                value:0,
                style:'height : '+screen.stats.height*0.8+'px;'
              },
              childrens:[
                {
                  type:'div',
                  prop:{
                    name:'desc'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'title'
                      },
                      childrens:[
                        {
                          type:'div',
                          prop:{text:'<h2>Isolation de</h2><h2>combles perdus</h2>'}
                        },
                        {
                          type:'p',
                          prop:{class:'dynamic_value_toAnimate',text:'0%',start:0,max:30,scroll:17.8,value:0}/*24 46 35 57 79 68*/
                        },
                        {
                          type:'p',
                          prop:{name:'annonce',text:"économie en énergie"}
                        }
                      ]
                    },
                    {
                      type:'p',
                      prop:{name:"first-desc",text:"C'est la priorité quand on parle des déperditions thermique d'une maison, l'isolation des combles représente le"},
                    },
                    {
                      type:'p',
                      prop:{text:"pourcentage le plus important, c'est la garantie de réaliser des économies d'énergie."}
                    },
                    {
                      type:'ul',
                      childrens:[
                        {type:'p',prop:{style:'grid-column:1/3;margin-bottom: 0;margin-left:0;',text:"Une bonne isolation vous garantit :"}},
                        {type:'li',prop:{text:"De réduire au maximum les déperditions thermique"}},
                        {type:'li',prop:{text:"De réaliser des économies d'énergie"}},
                        {type:'li',prop:{text:"De réduire vos factures énergétiques"}},
                        {type:'li',prop:{text:"De réduire les nuisances sonores extérieures"}},
                        {type:'li',prop:{text:"Un respect de l’environnement"}},
                        {type:'li',prop:{text:"Un confort augmenté été comme hiver"}},
                        {type:'li',prop:{text:"Une rentabilitée en seulement quelques années"}},
                        {type:'li',prop:{text:"Une plus value de votre habitat"}},
                        {type:'li',prop:{style:'grid-column:1/3',text:"Isolation solidaire pour 1€*",name:'to_aides',onclick:'changePage("aides")'}},
                      ]
                    }
                  ]
                },
                {
                  type:'div',
                  prop:{
                    name:'img'
                  }
                }
              ]
            },
            { // Isolation combles rampant
              type:'div',
              prop:{
                class:'service',
                name:'combles_rampant',
                value:1,
                style:'height : '+screen.stats.height*0.8+'px;'
              },
              childrens:[
                {
                  type:'div',
                  prop:{
                    name:'desc'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'title'
                      },
                      childrens:[
                        {
                          type:'div',
                          prop:{text:'<h2>Isolation de</h2><h2>combles rampants</h2>'}
                        },
                        {
                          type:'p',
                          prop:{class:'dynamic_value_toAnimate',text:'0%',start:0,max:30,scroll:29,value:0}
                        },
                        {
                          type:'p',
                          prop:{name:'annonce',text:"économie en énergie"}
                        }
                      ]
                    },
                    {
                      type:'p',
                      prop:{name:"first-desc",text:"Prévus pour les combles aménageables ou aménagés, elle est au même titre que l'isolation des combles perdus la"},
                    },
                    {
                      type:'p',
                      prop:{text:"priorité en terme de déperdition thermique et d'économie d'énergie."},
                    },
                    {
                      type:'ul',
                      childrens:[
                        {type:'p',prop:{style:'grid-column:1/3;margin-bottom: 0;margin-left: 1vw;',text:"Une bonne isolation vous garantit :"}},
                        {type:'li',prop:{text:"De réduire au maximum les déperditions thermique"}},
                        {type:'li',prop:{text:"De réaliser des économies d'énergie"}},
                        {type:'li',prop:{text:"De réduire vos factures énergétiques"}},
                        {type:'li',prop:{text:"De réduire les nuisances sonores extérieures"}},
                        {type:'li',prop:{text:"Un respect de l’environnement"}},
                        {type:'li',prop:{text:"Un confort augmenté été comme hiver"}},
                        {type:'li',prop:{text:"Une rentabilitée en seulement quelques années"}},
                        {type:'li',prop:{text:"Une plus value de votre habitat"}},
                        {type:'li',prop:{style:'grid-column:1/3',text:"Des aides financières et subventions*",name:'to_aides',onclick:'changePage("aides")'}},
                      ]
                    }
                  ]
                },
                {
                  type:'div',
                  prop:{
                    name:'img'
                  }
                }
              ]
            },
            { // Isolation thermique intérieur
              type:'div',
              prop:{
                class:'service',
                name:'plancher',
                value:0,
                style:'height : '+screen.stats.height*0.8+'px;'
              },
              childrens:[
                {
                  type:'div',
                  prop:{
                    name:'desc'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'title'
                      },
                      childrens:[
                        {
                          type:'div',
                          prop:{text:'<h2>Isolation thermique</h2><h2>par intérieur</h2>'}
                        },
                        {
                          type:'p',
                          prop:{class:'dynamic_value_toAnimate',text:'0%',start:0,max:25,scroll:39.6,value:0}
                        },
                        {
                          type:'p',
                          prop:{name:'annonce',text:"économie en énergie"}
                        }
                      ]
                    },
                    {
                      type:'p',
                      prop:{name:"first-desc",text:"Second poste de déperdition, l'isolation thermique de vos murs intérieurs, vous garantit de réaliser des économies"},
                    },
                    {
                      type:'p',
                      prop:{text:"d'énergie et financière importantes. La finition en plaque de plâtre vous permet de réaliser la finition de votre choix."},
                    },
                    {
                      type:'ul',
                      childrens:[
                        {type:'p',prop:{style:'grid-column:1/3;margin-bottom: 0;margin-left:0;',text:"Une ITI efficace vous garantit :"}},
                        {type:'li',prop:{text:"De réduire au maximum les déperditions thermique"}},
                        {type:'li',prop:{text:"De réaliser des économies d'énergie"}},
                        {type:'li',prop:{text:"De réduire vos factures énergétiques"}},
                        {type:'li',prop:{text:"De réduire les nuisances sonores extérieures"}},
                        {type:'li',prop:{text:"Un respect de l’environnement"}},
                        {type:'li',prop:{text:"Un confort augmenté été comme hiver"}},
                        {type:'li',prop:{text:"Une rentabilitée en seulement quelques années"}},
                        {type:'li',prop:{text:"Une plus value de votre habitat"}},
                        {type:'li',prop:{style:'grid-column:1/3',text:"Des aides financières et subventions*",name:'to_aides',onclick:'changePage("aides")'}},
                      ]
                    }
                  ]
                },
                {
                  type:'div',
                  prop:{
                    name:'img'
                  }
                }
              ]
            },
            { // Isolation extérieur
              type:'div',
              prop:{
                class:'service',
                name:'exterieur',
                value:1,
                style:'height : '+screen.stats.height*0.8+'px;'
              },
              childrens:[
                {
                  type:'div',
                  prop:{
                    name:'desc'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'title'
                      },
                      childrens:[
                        {
                          type:'div',
                          prop:{text:'<h2>Isolation thermique</h2><h2>par extérieur</h2>'}
                        },
                        {
                          type:'p',
                          prop:{class:'dynamic_value_toAnimate',text:'0%',start:0,max:25,scroll:51,value:0}
                        },
                        {
                          type:'p',
                          prop:{name:'annonce',text:"économie en énergie"}
                        }
                      ]
                    },
                    {
                      type:'p',
                      prop:{name:"first-desc",text:"L'isolation thermique de vos murs par l'extérieur vous garantit un double avantage, celui de réaliser des"},
                    },
                    {
                      type:'p',
                      prop:{text:"économies importantes et de remettre à neuf votre façade"},
                    },
                    {
                      type:'ul',
                      childrens:[
                        {type:'p',prop:{style:'grid-column:1/3;margin-bottom: 0;margin-left: 1vw;',text:"Une ITE efficace vous garantit :"}},
                        {type:'li',prop:{text:"De réduire au maximum les déperditions thermique"}},
                        {type:'li',prop:{text:"De réaliser des économies d'énergie"}},
                        {type:'li',prop:{text:"De réduire vos factures énergétiques"}},
                        {type:'li',prop:{text:"De réduire les nuisances sonores extérieures"}},
                        {type:'li',prop:{text:"Un respect de l’environnement"}},
                        {type:'li',prop:{text:"Un confort augmenté été comme hiver"}},
                        {type:'li',prop:{text:"Une rentabilitée en seulement quelques années"}},
                        {type:'li',prop:{text:"Une remise à neuf de votre façade"}},
                        {type:'li',prop:{text:"Une plus value de votre habitat"}},
                        {type:'li',prop:{text:"Des aides financières et subventions*",name:'to_aides',onclick:'changePage("aides")'}},
                      ]
                    },
                  ]
                },
                {
                  type:'div',
                  prop:{
                    name:'img'
                  }
                }
              ]
            },
            { // Isolation des menuiseries
              type:'div',
              prop:{
                class:'service',
                name:'menuiseries',
                value:0,
                style:'height : '+screen.stats.height*0.8+'px;'
              },
              childrens:[
                {
                  type:'div',
                  prop:{
                    name:'desc'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'title'
                      },
                      childrens:[
                        {
                          type:'div',
                          prop:{text:'<h2>Isolation thermique</h2><h2>des menuiseries</h2>'}
                        },
                        {
                          type:'p',
                          prop:{class:'dynamic_value_toAnimate',text:'0%',start:0,max:15,scroll:61,value:0}
                        },
                        {
                          type:'p',
                          prop:{name:'annonce',text:"économie en énergie"}
                        }
                      ]
                    },
                    {
                      type:'p',
                      prop:{name:"first-desc",text:"L'isolation thermique de vos portes et fenêtres est indispensable pour réduire les déperditions et vos factures. Une"},
                    },
                    {
                      type:'p',
                      prop:{text:"bonne menuiserie avec un double vitrage performant vous permet d'améliorer votre confort thermique et acoustique."},
                    },
                    {
                      type:'ul',
                      childrens:[
                        {type:'p',prop:{style:'grid-column:1/3;margin-bottom: 0;margin-left:0;',text:"Une menuiserie performante vous garantit :"}},
                        {type:'li',prop:{text:"De réduire au maximum les déperditions thermique"}},
                        {type:'li',prop:{text:"De réaliser des économies d'énergie"}},
                        {type:'li',prop:{text:"De réduire vos factures énergétiques"}},
                        {type:'li',prop:{text:"De réduire les nuisances sonores extérieures"}},
                        {type:'li',prop:{text:"Un respect de l’environnement"}},
                        {type:'li',prop:{text:"Un confort augmenté été comme hiver"}},
                        {type:'li',prop:{text:"Une rentabilitée en seulement quelques années"}},
                        {type:'li',prop:{text:"Une plus value de votre habitat"}},
                        {type:'li',prop:{text:"Des aides financières et subventions*",name:'to_aides',onclick:'changePage("aides")'}},
                      ]
                    },
                  ]
                },
                {
                  type:'div',
                  prop:{
                    name:'img'
                  }
                }
              ]
            },
            { // Isolation de plancher bas
              type:'div',
              prop:{
                class:'service',
                name:'interieure',
                value:1,
                style:'height : '+screen.stats.height*0.8+'px;'
              },
              childrens:[
                {
                  type:'div',
                  prop:{
                    name:'desc'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'title'
                      },
                      childrens:[
                        {
                          type:'div',
                          prop:{text:'<h2>Isolation de</h2><h2>plancher bas</h2>'}
                        },
                        {
                          type:'p',
                          prop:{class:'dynamic_value_toAnimate',text:'0%',start:0,max:12,scroll:73,value:0}
                        },
                        {
                          type:'p',
                          prop:{name:'annonce',text:"économie en énergie"}
                        }
                      ]
                    },
                    {
                      type:'p',
                      prop:{name:"first-desc",text:"Le plancher bas est la paroi séparant l’espace de vie de votre habitat et le sol extérieur. Une bonne isolation des sols"},
                    },
                    {
                      type:'p',
                      prop:{text:"et des sous-sols (planchers bas) vous garantit une protection anti-humidité et une sensation de confort lorsque vous marchez pieds nus."},
                    },
                    {
                      type:'ul',
                      childrens:[
                        {type:'p',prop:{style:'grid-column:1/3;margin-bottom: 0;margin-left: 1vw;',text:"Une isolation efficace de vos sols vous garantit :"}},
                        {type:'li',prop:{text:"De réduire les déperditions thermiques"}},
                        {type:'li',prop:{text:"De réaliser des économies d'énergie"}},
                        {type:'li',prop:{text:"De réduire vos factures énergétiques"}},
                        {type:'li',prop:{text:"Un respect de l’environnement"}},
                        {type:'li',prop:{text:"Un confort augmenté été comme hiver"}},
                        {type:'li',prop:{text:"Une rentabilitée en seulement quelques années"}},
                        {type:'li',prop:{text:"Une protection contre l'humidité"}},
                        {type:'li',prop:{text:"Une plus value de votre habitat"}},
                        {type:'li',prop:{style:"width: max-content;",text:"Des aides financières et subventions*"}},
                      ]
                    },
                  ]
                },
                {
                  type:'div',
                  prop:{
                    name:'img'
                  }
                }
              ]
            },
          ]
          },
          question_projet,
          footer
        ]
      }
    ],
    energies_renouvelables : [
      {
        type:'div',
        prop:{
          id:'container',
          name:'energies_renouvelables',
        },
        childrens:[
          { // header
            type:'div',
            prop:{
              class:'subContainer',
              name:'header',
              style:'height : '+(screen.stats.height*0.9)+'px;'
            },
            childrens:[
              {
                type:'div',
                prop:{
                  name:'left'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      text:'<h1>Energies</h1><h1>renouvelables</h1>'
                    }
                  },
                  {
                    type:'p',
                    prop:{name:"titre",text:"Une énergie naturelle et économique"}
                  },
                  {
                    type:'p',
                    prop:{text:"Passez aux énergies renouvelables. Profitez d'une source d'énergie gratuite renouvelée par la nature au profit de la planète... Et de vos économies."}
                  }
                ]
              },
              {
                type:'div',
                prop:{
                  name:'right'
                }
              }
            ]
          },
          { // services-liste
              type:'div',
              prop:{
                class:'subContainer',
                name:'services_liste',
                style:'height : '+screen.stats.height+'px;'
              },
              childrens:[
                { // Pompe à chaleur AIR/EAU
                  type:'div',
                  prop:{
                    class:'service',
                    name:'pompe_chaleur',
                    onclick:'scrollLink(24)'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'img'
                      }
                    },
                    {
                      type:'div',
                      prop:{
                        text:'<p>Pompe à chaleur AIR/EAU</p>'
                      }
                    }
                  ]
                },
                { // Climatiseur réversible
                  type:'div',
                  prop:{
                    class:'service',
                    name:'climatiseur',
                    onclick:'scrollLink(35)'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'img'
                      }
                    },
                    {
                      type:'div',
                      prop:{
                        text:'<p>Climatiseur réversible</p>'
                      }
                    }
                  ]
                },
                { // Chauffe eau thermo dynamique
                  type:'div',
                  prop:{
                    class:'service',
                    name:'chauffe_eau_thermo',
                    onclick:'scrollLink(46)'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'img'
                      }
                    },
                    {
                      type:'div',
                      prop:{
                        text:'<p>Chauffe eau thermo dynamique</p>'
                      }
                    }
                  ]
                },
                { // Chauffe eau solaire individuel
                  type:'div',
                  prop:{
                    class:'service',
                    name:'chauffe_eau_solaire',
                    onclick:'scrollLink(57)'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'img'
                      }
                    },
                    {
                      type:'div',
                      prop:{
                        text:'<p>Chauffe eau solaire individuel</p>'
                      }
                    }
                  ]
                },
                { // Poêle
                  type:'div',
                  prop:{
                    class:'service',
                    name:'poele',
                    onclick:'scrollLink(68)'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'img'
                      }
                    },
                    {
                      type:'div',
                      prop:{
                        text:'<p>Poêle</p>'
                      }
                    }
                  ]
                },
                { // Solaire photovoltaïque
                  type:'div',
                  prop:{
                    class:'service',
                    name:'photovoltaique',
                    onclick:'scrollLink(79)'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'img'
                      }
                    },
                    {
                      type:'div',
                      prop:{
                        text:'<p>Solaire photovoltaïque</p>'
                      }
                    }
                  ]
                },
              ]
            },
          { // services
          type:'div',
          prop:{
            class:'subContainer',
            name:'services',
          },
          childrens:[
              { // Pompe à chaleur AIR/EAU
                type:'div',
                prop:{
                  class:'service',
                  name:'combles_perdus',
                  value:0,
                  style:'height : '+screen.stats.height*0.8+'px;'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'desc'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{
                          name:'title'
                        },
                        childrens:[
                          {
                            type:'div',
                            prop:{text:'<h2>Pompe à chaleur</h2><h2>AIR/EAU</h2>'}
                          },
                          {
                            type:'p',
                            prop:{class:'dynamic_value_toAnimate',text:'0%',start:0,max:70,scroll:17.8,value:0}
                          },
                          {
                            type:'p',
                            prop:{name:'annonce',text:"économie en énergie"}
                          }
                        ]
                      },
                      {
                        type:'p',
                        prop:{name:"first-desc",text:"Elle assure le chauffage et/ou la production d'eau chaude sanitaire dans votre habitat. Elle capte les calories"},
                      },
                      {
                        type:'p',
                        prop:{text:"naturellement présentes dans l'air extérieur et les injecte dans le circuit de chauffage central et/ou d'eau chaude de votre maison."},
                      },
                      {
                        type:'ul',
                        childrens:[
                          {type:'p',prop:{style:'grid-column:1/3;margin-bottom: 0;margin-left:0;',text:"Une PAC AIR/EAU adaptée à votre logement vous garantit :"}},
                          {type:'li',prop:{text:"De réaliser des économies d'énergie"}},
                          {type:'li',prop:{text:"De réduire de vos factures énergétiques"}},
                          {type:'li',prop:{text:"Un respect de l’environnement"}},
                          {type:'li',prop:{text:"Un raccordement sur le circuit de chauffage existant"}},
                          {type:'li',prop:{text:"Une rentabilitée en seulement quelques années"}},
                          {type:'li',prop:{text:"PAC AIR/EAU solidaire pour 1€*",name:'to_aides',onclick:'changePage("aides")'}},
                        ]
                      },
                    ]
                  },
                  {
                    type:'div',
                    prop:{
                      name:'img'
                    }
                  }
                ]
              },
              { // Climatiseur réversible
                type:'div',
                prop:{
                  class:'service',
                  name:'climatiseur',
                  value:1,
                  style:'height : '+screen.stats.height*0.8+'px;'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'desc'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{
                          name:'title'
                        },
                        childrens:[
                          {
                            type:'div',
                            prop:{text:'<h2>Climatiseur PAC</h2><h2>AIR/AIR</h2>'}
                          },
                          {
                            type:'p',
                            prop:{class:'dynamic_value_toAnimate',text:'0%',start:0,max:55,scroll:29,value:0}
                          },
                          {
                            type:'p',
                            prop:{name:'annonce',text:"économie en énergie"}
                          }
                        ]
                      },
                      {
                        type:'p',
                        prop:{name:"first-desc",text:"Egalement appelé pompe à chaleur AIR/AIR, elle assure le chauffage et/ou le refroidissement dans votre habitat."},
                      },
                      {
                        type:'p',
                        prop:{text:"Elle capte les calories naturellement présentes dans l'air extérieur pour chauffer l'intérieur de votre maison en hiver et la refroidir en été."},
                      },
                      {
                        type:'ul',
                        childrens:[
                          {type:'p',prop:{style:'grid-column:1/3;margin-bottom: 0;margin-left: 1vw;',text:"Une PAC AIR/EAU adaptée à votre logement vous garantit :"}},
                          {type:'li',prop:{text:"De réaliser des économies d'énergie"}},
                          {type:'li',prop:{text:"De réduire de vos factures énergétiques"}},
                          {type:'li',prop:{text:"Un respect de l’environnement"}},
                          {type:'li',prop:{text:"Un chauffage et une climatisation"}},
                          {type:'li',prop:{text:"Une rentabilitée en seulement quelques années"}},
                          {type:'li',prop:{text:"Des aides financières et subventions*",name:'to_aides',onclick:'changePage("aides")'}},
                        ]
                      },
                    ]
                  },
                  {
                    type:'div',
                    prop:{
                      name:'img'
                    }
                  }
                ]
              },
              { // Chauffe eau thermo dynamique
                type:'div',
                prop:{
                  class:'service',
                  name:'chauffe_eau_thermo',
                  value:0,
                  style:'height : '+screen.stats.height*0.8+'px;'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'desc'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{
                          name:'title'
                        },
                        childrens:[
                          {
                            type:'div',
                            prop:{text:'<h2>Chauffe-eau</h2><h2>thermodynamique</h2>'}
                          },
                          {
                            type:'p',
                            prop:{class:'dynamic_value_toAnimate',text:'0%',start:0,max:70,scroll:39.6,value:0}
                          },
                          {
                            type:'p',
                            prop:{name:'annonce',text:"économie en énergie"}
                          }
                        ]
                      },
                      {
                        type:'p',
                        prop:{name:'first-desc',text:"Fonctionnant de façon identique à une pompe à chaleur, il assure la production d'eau chaude sanitaire dans votre"},
                      },
                      {
                        type:'p',
                        prop:{text:"habitat. Il capte les calories naturellement présentes dans l'air extérieur et les injecte dans le circuit d'eau chaude de votre maison."},
                      },
                      {
                        type:'ul',
                        childrens:[
                          {type:'p',prop:{style:'grid-column:1/3;margin-bottom: 0;margin-left:0;',text:"Un CET adapté à vos besoins vous garantit :"}},
                          {type:'li',prop:{text:"De réaliser des économies d'énergie"}},
                          {type:'li',prop:{text:"De réduire de vos factures d'eau chaude"}},
                          {type:'li',prop:{text:"Un respect de l’environnement"}},
                          {type:'li',prop:{text:"Un raccordement sur le circuit d'eau existant"}},
                          {type:'li',prop:{text:"Une rentabilitée en seulement quelques années"}},
                          {type:'li',prop:{text:"Des aides financières et subventions*",name:'to_aides',onclick:'changePage("aides")'}},
                        ]
                      },
                    ]
                  },
                  {
                    type:'div',
                    prop:{
                      name:'img'
                    }
                  }
                ]
              },
              { // Chauffe eau solaire individuel
                type:'div',
                prop:{
                  class:'service',
                  name:'chauffe_eau_solaire',
                  value:1,
                  style:'height : '+screen.stats.height*0.8+'px;'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'desc'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{
                          name:'title'
                        },
                        childrens:[
                          {
                            type:'div',
                            prop:{text:'<h2>Chauffe-eau</h2><h2>solaire individuel</h2>'}
                          },
                          {
                            type:'p',
                            prop:{class:'dynamic_value_toAnimate',text:'0%',start:0,max:60,scroll:51,value:0}
                          },
                          {
                            type:'p',
                            prop:{name:'annonce',text:"économie en énergie"}
                          }
                        ]
                      },
                      {
                        type:'p',
                        prop:{name:'first-desc',text:"Grâce à l'énergie solaire, le CESI vous assure la production d'eau chaude sanitaire de votre maison. Les panneaux"},
                      },
                      {
                        type:'p',
                        prop:{text:"solaires thermiques récupèrent l'énergie produite par le rayonnement solaire et la réinjecte dans le chauffe eau. Cet échange thermique vous assure un production d'eau chaude sanitaire éco-responsable."},
                      },
                      {
                        type:'ul',
                        childrens:[
                          {type:'p',prop:{style:'grid-column:1/3;margin-bottom: 0;margin-left: 1vw;',text:"Un CESI adapté à votre logement vous garantit :"}},
                          {type:'li',prop:{text:"De réaliser des économies d'énergie"}},
                          {type:'li',prop:{text:"De réduire vos factures énergétiques"}},
                          {type:'li',prop:{text:"Un respect de l’environnement"}},
                          {type:'li',prop:{text:"Un raccordement sur le circuit de d'eau existant"}},
                          {type:'li',prop:{text:"Une rentabilitée en seulement quelques années"}},
                          {type:'li',prop:{text:"Des aides financières et subventions*",name:'to_aides',onclick:'changePage("aides")'}},
                        ]
                      },
                    ]
                  },
                  {
                    type:'div',
                    prop:{
                      name:'img'
                    }
                  }
                ]
              },
              { // Poêle
                type:'div',
                prop:{
                  class:'service',
                  name:'poele',
                  value:0,
                  style:'height : '+screen.stats.height*0.8+'px;'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'desc'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{
                          name:'title'
                        },
                        childrens:[
                          {
                            type:'div',
                            prop:{text:'<h2>Poêle bois</h2><h2>grannulés</h2>'}
                          },
                          {
                            type:'p',
                            prop:{class:'dynamic_value_toAnimate',text:'0%',start:0,max:40,scroll:61,value:0}
                          },
                          {
                            type:'p',
                            prop:{name:'annonce',text:"économie en énergie"}
                          }
                        ]
                      },
                      {
                        type:'p',
                        prop:{name:'first-desc',text:"­Également appelés poêles à pellets ou à bûches, ils sont des appareils de chauffage d'appoint, ils sont"},
                      },
                      {
                        type:'p',
                        prop:{text:"indépendants du chauffage central. C'est par la combustion des granulés de bois ou des bûches que les poêles vont diffuser directement la chaleur dans votre intérieur."},
                      },
                      {
                        type:'ul',
                        childrens:[
                          {type:'p',prop:{style:'grid-column:1/3;margin-bottom: 0;margin-left:0;',text:"Un poêle adapté à votre logement vous garantit :"}},
                          {type:'li',prop:{text:"De réaliser des économies d'énergie"}},
                          {type:'li',prop:{text:"De réduire vos factures énergétiques"}},
                          {type:'li',prop:{text:"Un respect de l’environnement"}},
                          {type:'li',prop:{text:"Un système de chauffage indépendant"}},
                          {type:'li',prop:{text:"Une rentabilitée en seulement quelques années"}},
                          {type:'li',prop:{text:"Poêle solidaire pour 1€*",name:'to_aides',onclick:'changePage("aides")'}},
                        ]
                      }
                    ]
                  },
                  {
                    type:'div',
                    prop:{
                      name:'img'
                    }
                  }
                ]
              },
              { // Solaire photovoltaïque
                type:'div',
                prop:{
                  class:'service',
                  name:'photovoltaique',
                  value:1,
                  style:'height : '+screen.stats.height*0.8+'px;'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'desc'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{
                          name:'title'
                        },
                        childrens:[
                          {
                            type:'div',
                            prop:{text:'<h2>Solaire</h2><h2>photovoltaïque</h2>'}
                          },
                          {
                            type:'p',
                            prop:{class:'dynamic_value_toAnimate',text:'0%',start:0,max:60,scroll:73,value:0}
                          },
                          {
                            type:'p',
                            prop:{name:'annonce',text:"Autoconsomation"}
                          }
                        ]
                      },
                      {
                        type:'p',
                        prop:{name:"first-desc",text:"Les panneaux assurent la production d'électricité lorsqu'ils sont éclairés par le soleil. Grâce à des matériaux dits 'semi-"},
                      },
                      {
                        type:'p',
                        prop:{text:"conducteurs', les cellules transforment l’énergie solaire en un courant continu. Celui-ci est transformé en courant alternatif par des micro-onduleurs pour la revente au réseau ou une autoconsommation."},
                      },
                      {
                        type:'ul',
                        childrens:[
                          {type:'p',prop:{style:'grid-column:1/3;margin-bottom: 0;margin-left: 1vw;',text:"Une centrale photovoltaïque adaptée a vos besoins vous garantit :"}},
                          {type:'li',prop:{text:"De réduire vos factures énergétiques"}},
                          {type:'li',prop:{text:"Une possibilité d'autoconsommé et de revendre le surplus"}},
                          {type:'li',prop:{text:"Un respect de l’environnement"}},
                          {type:'li',prop:{text:"Une indépendance énergétique"}},
                          {type:'li',prop:{text:"Une rentabilitée en quelque année"}},
                          {type:'li',prop:{text:"Des aides financières et subventions*",name:'to_aides',onclick:'changePage("aides")'}},
                        ]
                      },
                    ]
                  },
                  {
                    type:'div',
                    prop:{
                      name:'img'
                    }
                  }
                ]
              },
            ]
          },
          question_projet,
          footer
        ]
      }
    ],
    renovation_habitat : [
      {
        type:'div',
        prop:{
          id:'container',
          name:'renovation_habitat',
        },
        childrens:[
          { // header
            type:'div',
            prop:{
              class:'subContainer',
              name:'header',
              style:'height : '+(screen.stats.height*0.9)+'px;'
            },
            childrens:[
              {
                type:'div',
                prop:{
                  name:'left'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      text:'<h1>Rénovation</h1><h1>& entretien</h1>'
                    }
                  },
                  {
                    type:'p',
                    prop:{name:"titre",text:"Un pas vers la tranquillité et la sérénité"}
                  },
                  {
                    type:'p',
                    prop:{text:"Protégez votre habitat et faites des économies, grâce à des solutions durables.  Agissez pour valoriser votre maison."}
                  }
                ]
              },
              {
                type:'div',
                prop:{
                  name:'right'
                }
              }
            ]
          },
          { // services-liste
              type:'div',
              prop:{
                class:'subContainer',
                name:'services_liste',
                style:'height : '+screen.stats.height+'px;'
              },
              childrens:[
                { // Réfection toiture
                  type:'div',
                  prop:{
                    class:'service',
                    name:'Rtoiture',
                    onclick:'scrollLink(24)'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'img'
                      }
                    },
                    {
                      type:'div',
                      prop:{
                        text:'<P>Réfection toiture</p>'
                      }
                    }
                  ]
                },
                { // Traitement de toiture
                  type:'div',
                  prop:{
                    class:'service',
                    name:'Ttoiture',
                    onclick:'scrollLink(35)'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'img'
                      }
                    },
                    {
                      type:'div',
                      prop:{
                        text:'<P>Traitement de toiture</p>'
                      }
                    }
                  ]
                },
                { // Zinguerie
                  type:'div',
                  prop:{
                    class:'service',
                    name:'zinguerie',
                    onclick:'scrollLink(46)'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'img'
                      }
                    },
                    {
                      type:'div',
                      prop:{
                        text:'<P>Zinguerie</p>'
                      }
                    }
                  ]
                },
                { // Traitement bois
                  type:'div',
                  prop:{
                    class:'service',
                    name:'bois',
                    onclick:'scrollLink(57)'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'img'
                      }
                    },
                    {
                      type:'div',
                      prop:{
                        text:'<P>Traitement bois</p>'
                      }
                    }
                  ]
                },
                { // Traitement de façade
                  type:'div',
                  prop:{
                    class:'service',
                    name:'Tfacade',
                    onclick:'scrollLink(68)'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'img'
                      }
                    },
                    {
                      type:'div',
                      prop:{
                        text:'<P>Traitement de façades</p>'
                      }
                    }
                  ]
                },
                { // Enduit façade
                  type:'div',
                  prop:{
                    class:'service',
                    name:'Efacade',
                    onclick:'scrollLink(79)'
                  },
                  childrens:[
                    {
                      type:'div',
                      prop:{
                        name:'img'
                      }
                    },
                    {
                      type:'div',
                      prop:{
                        text:'<P>Enduits façades</p>'
                      }
                    }
                  ]
                },
              ]
            },
          { // services
          type:'div',
          prop:{
            class:'subContainer',
            name:'services',
          },
          childrens:[
              { // Réfection toiture
                type:'div',
                prop:{
                  class:'service',
                  name:'Rtoiture',
                  value:0,
                  style:'height : '+screen.stats.height*0.8+'px;'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'desc'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{
                          name:'title'
                        },
                        childrens:[
                          {
                            type:'div',
                            prop:{text:'<h2>Réfection de</h2><h2>toiture</h2>'}
                          },
                          {
                            type:'p',
                            prop:{class:'dynamic_value_toAnimate',text:'0%',start:0,max:30,scroll:17.8,value:0}
                          },
                          {
                            type:'p',
                            prop:{name:'annonce',text:"de plus value"}
                          }
                        ]
                      },
                      {
                        type:'p',
                        prop:{name:"first-desc",text:"Une toiture en bonne santé est l'assurance d'une maison saine. Si les tuiles qui composent votre toiture sont"},
                      },
                      {
                        type:'p',
                        prop:{text:"trop dégradées et que les infiltrations sont nombreuses, un traitement ne sera plus suffisant. Dans ce cas, des travaux de réfection de toiture s’imposent. Le remplacement de la couverture est une étape incontournable pour assurer l’étanchéité de votre habitat. Il est préférable d'agir avant que les infiltrations successives aient endommagé la charpente, l'isolation et l'intégrité de votre habitation."},
                      },
                      {
                        type:'ul',
                        childrens:[
                          {type:'p',prop:{style:'grid-column:1/3;margin-bottom: 0;margin-left:0;',text:"Une réfection de toiture efficace vous assure :"}},
                          {type:'li',prop:{text:"Une plus-value de votre habitat"}},
                          {type:'li',prop:{text:"Une sérénité et meilleur confort"}},
                          {type:'li',prop:{text:"Une pérennité de votre maison"}},
                          {type:'li',prop:{text:"Une protection de votre intérieur "}},
                          {type:'li',prop:{text:"Une protection contre l'humidité"}},
                          {type:'li',prop:{text:"De réaliser des économies "}}
                        ]
                      },
                    ]
                  },
                  {
                    type:'div',
                    prop:{
                      name:'img'
                    }
                  }
                ]
              },
              { // Traitement de toiture
                type:'div',
                prop:{
                  class:'service',
                  name:'Efacade',
                  value:1,
                  style:'height : '+screen.stats.height*0.8+'px;'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'desc'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{
                          name:'title'
                        },
                        childrens:[
                          {
                            type:'div',
                            prop:{text:'<h2>Traitement de</h2><h2>toiture</h2>'}
                          },
                          {
                            type:'p',
                            prop:{class:'dynamic_value_toAnimate',text:'0%',start:0,max:100,scroll:29,value:0}
                          },
                          {
                            type:'p',
                            prop:{name:'annonce',text:"assainie"}
                          }
                        ]
                      },
                      {
                        type:'p',
                        prop:{name:"first-desc",text:"Le toit protège votre foyer des éléments extérieurs. Il est fortement exposé à des agressions diverses."},
                      },
                      {
                        type:'p',
                        prop:{text:"C'est l'une des raisons pour laquelle il est indispensable d'entretenir votre toiture de façon régulière."},
                      },
                      {
                        type:'p',
                        prop:{text:"Si elle n'est pas entretenue et que cela entraîne l’infiltration d’eaux pluviales, des dépenses considérables seront à prévoir pour effectuer sa réfection."},
                      },
                      {
                        type:'ul',
                        childrens:[
                          {type:'p',prop:{style:'grid-column:1/3;margin-bottom: 0;margin-left: 1vw;',text:"Un traitement de toiture efficace vous assure :"}},
                          {type:'li',prop:{text:"Un effet auto-nettoyant"}},
                          {type:'li',prop:{text:"Un aspect de neuf"}},
                          {type:'li',prop:{text:"De prolonger sa durée de vie"}},
                          {type:'li',prop:{text:"Une plus-value de votre habitat"}},
                          {type:'li',prop:{text:"Une sérénité et meilleur confort"}},
                          {type:'li',prop:{text:"Une pérennité de votre maison"}},
                          {type:'li',prop:{text:"Une protection de votre intérieur "}},
                          {type:'li',prop:{text:"Une protection contre l'humidité"}},
                          {type:'li',prop:{text:"De réaliser des économies"}},
                          {type:'li',prop:{text:"Une étanchéité total"}}
                        ]
                      },
                    ]
                  },
                  {
                    type:'div',
                    prop:{
                      name:'img'
                    }
                  }
                ]
              },
              { // Zinguerie
                type:'div',
                prop:{
                  class:'service',
                  name:'zinguerie',
                  value:0,
                  style:'height : '+screen.stats.height*0.8+'px;'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'desc'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{
                          name:'title'
                        },
                        childrens:[
                          {
                            type:'div',
                            prop:{text:'<h2>Zinguerie</h2>'}
                          },
                          {
                            type:'p',
                            prop:{class:'dynamic_value_toAnimate',text:'0%',start:0,max:100,scroll:39.6,value:0}
                          },
                          {
                            type:'p',
                            prop:{name:'annonce',text:"Étanchéité"}
                          }
                        ]
                      },
                      {
                        type:'p',
                        prop:{name:"first-desc",text:"L'étanchéité de votre toiture est assurée par diverses pièces. Les éléments en zinc en font partie. Ils assurent l'évacuation"},
                      },
                      {
                        type:'p',
                        prop:{text:"totale de l'eau de pluie. Lorsque les pièces d'étanchéité sont vieillissantes, il est primordial de les remplacer avant d'endommager les bois de charpentes et l'intégrité de votre maison."},
                      },
                      {
                        type:'ul',
                        childrens:[
                          {type:'p',prop:{style:'grid-column:1/3;margin-bottom: 0;margin-left:0;',text:"Des éléments de zinc adapter vous garantissent :"}},
                          {type:'li',prop:{text:"Une étanchéité parfaite"}},
                          {type:'li',prop:{text:"Un aspect de neuf"}},
                          {type:'li',prop:{text:"Une plus-value de votre habitat"}},
                          {type:'li',prop:{text:"Une sérénité et meilleur confort"}},
                          {type:'li',prop:{text:"Une pérennité de votre maison"}},
                          {type:'li',prop:{text:"Une protection de votre intérieur "}},
                          {type:'li',prop:{text:"Une protection contre les infiltrations"}},
                          {type:'li',prop:{text:"De réaliser des économies"}}
                        ]
                      },
                    ]
                  },
                  {
                    type:'div',
                    prop:{
                      name:'img'
                    }
                  }
                ]
              },
              { // Traitement bois
                type:'div',
                prop:{
                  class:'service',
                  name:'bois',
                  value:1,
                  style:'height : '+screen.stats.height*0.8+'px;'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'desc'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{
                          name:'title'
                        },
                        childrens:[
                          {
                            type:'div',
                            prop:{text:'<h2>Traitement de</h2><h2>bois</h2>'}
                          },
                          {
                            type:'p',
                            prop:{class:'dynamic_value_toAnimate',text:'0%',start:0,max:100,scroll:51,value:0}
                          },
                          {
                            type:'p',
                            prop:{name:'annonce',text:"assainis"}
                          }
                        ]
                      },
                      {
                        type:'p',
                        prop:{name:"first-desc",text:"La charpente est un élément qui demande une attention et un entretien particuliers. Elle joue le rôle de support"},
                      },
                      {
                        type:'p',
                        prop:{text:"de toute la couverture de votre maison. Il est important de savoir que toutes les composantes en bois d’un logement peuvent être sujettes aux dangers, des champignons ou des insectes xylophages. La charpente en bois ne déroge pas à cette règle, il est donc nécessaire de se prémunir de cette situation en traitant votre charpente."},
                      },
                      {
                        type:'ul',
                        childrens:[
                          {type:'p',prop:{style:'grid-column:1/3;margin-bottom: 0;margin-left: 1vw;',text:"Un traitement de charpente adapté vous garantit :"}},
                          {type:'li',prop:{text:"De prolonger sa durée de vie"}},
                          {type:'li',prop:{text:"Une plus-value de votre habitat"}},
                          {type:'li',prop:{text:"Une sérénité et meilleur confort"}},
                          {type:'li',prop:{text:"Une pérennité de votre maison"}},
                          {type:'li',prop:{text:"Une protection contre les insectes xylophages"}},
                          {type:'li',prop:{text:"Une protections contre les champignons"}},
                          {type:'li',prop:{text:"De réaliser des économies"}},
                        ]
                      },
                    ]
                  },
                  {
                    type:'div',
                    prop:{
                      name:'img'
                    }
                  }
                ]
              },
              { // Traitement de façade
                type:'div',
                prop:{
                  class:'service',
                  name:'Tfacade',
                  value:0,
                  style:'height : '+screen.stats.height*0.8+'px;'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'desc'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{
                          name:'title'
                        },
                        childrens:[
                          {
                            type:'div',
                            prop:{text:'<h2>Traitement de</h2><h2>façades</h2>'}
                          },
                          {
                            type:'p',
                            prop:{class:'dynamic_value_toAnimate',text:'0%',start:0,max:100,scroll:61,value:0}
                          },
                          {
                            type:'p',
                            prop:{name:'annonce',text:"assainies"}
                          }
                        ]
                      },
                      {
                        type:'p',
                        prop:{name:"first-desc",text:"Avec le toit, les murs protègent votre foyer des éléments extérieurs. Ils sont fortement exposés"},
                      },
                      {
                        type:'p',
                        prop:{text:"à des agressions diverses. C'est l'une des raisons pour laquelle il est indispensable d'entretenir vos façades de façon régulière."},
                      },
                      {
                        type:'p',
                        prop:{text:"Si elle n'est pas entretenue et que cela entraîne la détérioration et voir l’infiltration d’eaux pluviales dans votre foyer. Des dépenses considérables seront à prévoir pour effectuer un ravalement de façade."},
                      },
                      {
                        type:'ul',
                        prop:{},
                        childrens:[
                          {type:'p',prop:{style:'grid-column:1/3;margin-bottom: 0;margin-left:0;',text:"Un bon traitement de façade vous garantit :"}},
                          {type:'li',prop:{text:"Un effet auto-nettoyant"}},
                          {type:'li',prop:{text:"Un aspect de neuf"}},
                          {type:'li',prop:{text:"Une prolongation de sa durée de vie"}},
                          {type:'li',prop:{text:"Une plus-value de votre habitat"}},
                          {type:'li',prop:{text:"Une sérénité et meilleur confort"}},
                          {type:'li',prop:{text:"Une pérennité de votre maison"}},
                          {type:'li',prop:{text:"Une protection de votre intérieur "}},
                          {type:'li',prop:{text:"Une protection contre l'humidité"}},
                          {type:'li',prop:{text:"De réaliser des économies"}},
                          {type:'li',prop:{text:"Une étanchéité total "}},
                        ]
                      },
                    ]
                  },
                  {
                    type:'div',
                    prop:{
                      name:'img'
                    }
                  }
                ]
              },
              { // Enduis de façade
                type:'div',
                prop:{
                  class:'service',
                  name:'Ttoiture',
                  value:1,
                  style:'height : '+screen.stats.height*0.8+'px;'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'desc'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{
                          name:'title'
                        },
                        childrens:[
                          {
                            type:'div',
                            prop:{text:'<h2>Enduits de</h2><h2>façades</h2>'}
                          },
                          {
                            type:'p',
                            prop:{class:'dynamic_value_toAnimate',text:'0%',start:0,max:100,scroll:73,value:0}
                          },
                          {
                            type:'p',
                            prop:{name:'annonce',text:"à votre goût"}
                          }
                        ]
                      },
                      {
                        type:'p',
                        prop:{name:"first-desc",text:"Une façade en bonne santé est l'assurance d'une maison saine. Si les murs de votre maison sont trop "},
                      },
                      {
                        type:'p',
                        prop:{text:"dégradés et que les fissures sont nombreuses, un traitement ne sera plus suffisant. Dans ce cas, des travaux de ravalement de façade s’imposent. Le ravalement de la façade est une étape incontournable pour assurer l’étanchéité de votre habitat. Il est préférable d'agir avant que les infiltrations successives aient endommagé votre habitation."},
                      },
                      {
                        type:'p',
                        prop:{text:"Un enduit de façade vous assure d'embellir votre maison avec la couleur et la finition de votre choix."},
                      },
                      {
                        type:'ul',
                        prop:{},
                        childrens:[
                          {type:'p',prop:{style:'grid-column:1/3;margin-bottom: 0;margin-left: 1vw;',text:"Un enduit de façade appliqué dans les règles de l'Art vous assure :"}},
                          {type:'li',prop:{text:"Une plus-value de votre habitat"}},
                          {type:'li',prop:{text:"Une finition de votre choix"}},
                          {type:'li',prop:{text:"Une sérénité et meilleur confort"}},
                          {type:'li',prop:{text:"Une pérennité de votre maison"}},
                          {type:'li',prop:{text:"Une protection de votre intérieur "}},
                          {type:'li',prop:{text:"Une protection contre l'humidité"}}
                        ]
                      },
                    ]
                  },
                  {
                    type:'div',
                    prop:{
                      name:'img'
                    }
                  }
                ]
              },
            ]
          },
          question_projet,
          footer
        ]
      }
    ],
    aides:[
      {
        type:'div',
        prop:{
          id:'container',
          name:'aides',
        },
        childrens:[
          { // header
            type:'div',
            prop:{
              name:'header',
              style:'height : '+screen.stats.height+'px;'
            },
            childrens:[
              {
                type:'div',
                prop:{
                  name:'left'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      text:'<h1>Aides &</h1><h1>Subventions</h1>'
                    }
                  },
                  {
                    type:'p',
                    prop:{
                      name:'titre',
                      text:"Quelles aides, primes et subventions pour financer jusqu’à 100% de votre projet de rénovation énergétique?"
                    }
                  },
                  {
                    type:'p',
                    prop:{
                      name:'desc',
                      text:"Entreprendre des travaux de rénovation énergétique, vous permet de prétendre à différentes aides, primes et subventions.<br>L’éligibilité dépend souvent des types de travaux, de vos ressources et des caractéristiques de votre maison.<br>Dans certains cas, les différents dispositifs permettent le financement total de vos projets."
                    }
                  },
                ]
              },
              {
                type:'div',
                prop:{
                  name:'right',
                },
              }
            ]
          },
          { // aides liste
            type:'div',
            prop:{
            name:'aides_liste',
            style:'height : '+screen.stats.height+'px;'
          },
          childrens:[
            {
              type:'div',
              prop:{
                class:'aide',
                name:'cee',
                onclick:'scrollLink(27)'
              },
              childrens:[
                {type:'p',prop:{text:"Certificat d'Économie d'Énergie"}},
              ]
            },
            {
              type:'div',
              prop:{
                class:'aide',
                name:'maprimerenov',
                onclick:'scrollLink(37)'
              },
              childrens:[
                {type:'p',prop:{text:'MaPrime Renov'}}
              ]
            },
            {
              type:'div',
              prop:{
                class:'aide',
                name:'eco_cheques',
                onclick:'scrollLink(55)'
              },
              childrens:[
                {type:'p',prop:{text:'Eco chèques'}}
              ]
            },
            {
              type:'div',
              prop:{
                class:'aide',
                name:'action_logement',
                onclick:'scrollLink(67)'
              },
              childrens:[
                {type:'p',prop:{text:"Action logement"}}
              ]
            },
            {
              type:'div',
              prop:{
                class:'aide',
                name:"creditimpot",
                onclick:'scrollLink(46)'
              },
              childrens:[
                {type:'p',prop:{text:"Crédit d'impôt"}}
              ]
            },
            {
              type:'div',
              prop:{
                class:'aide',
                name:'tvareduit',
                onclick:'scrollLink(73.46)'
              },
              childrens:[
                {type:'p',prop:{text:'TVA à taux réduit(5.5%)'}}
              ]
            }
          ]
        },
          { // services
          type:'div',
          prop:{
            class:'subContainer',
            name:'services',
          },
          childrens:[
              { // CEE
                type:'div',
                prop:{
                  class:'service',
                  name:'cee',
                  value:0,
                  // style:'height : '+screen.stats.height*0.8+'px;'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'desc'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{
                          name:'title'
                        },
                        childrens:[
                          {
                            type:'div',
                            prop:{text:'<h2>CEE</h2>'}
                          }
                        ]
                      },
                      {
                        type:'div',
                        prop:{name:"subDesc"},
                        childrens:[
                          {type:'p',prop:{text:"Un certificat d'économies d'énergie ou 'prime énergie' est une mesure politique mise en place en 2005 visant à encourager les économies d'énergie."}},
                          {type:'p',prop:{text:"Cette mesure oblige les acteurs de l'énergie à promouvoir des actions d'économie d'énergie et à inciter les particuliers à réduire leur consommation énergétique."}},
                          {type:'p',prop:{text:"Ces acteurs 'obligés' subventionnent une partie des travaux réalisés par les foyers français."}},
                        ]
                      },
                      {
                        type:'ul',
                        prop:{text:"Bénéficiaires et conditions d'accès :"},
                        childrens:[
                          {type:'li',prop:{text:"Propriétaires occupants, bailleurs et locataires "}},
                          {type:'li',prop:{text:"Logement de plus de 2 ans en France métropolitaine (résidence principale ou secondaire)"}},
                          {type:'li',prop:{text:"Travaux réalisés par des artisans RGE"}},
                          {type:'li',prop:{text:"Matériels éligibles"}},
                        ]
                      },
                      {
                        type:'div',
                        prop:{name:"endDesc"},
                        childrens:[
                          {type:'p',prop:{text:"En fonction du type de travaux réalisés, de la situation géographique et des caractéristiques du logement, le montant de l'aide varie."}},
                          {type:'div',prop:{style:'grid-row:1;grid-column:2;',onclick:'scrollLink(86)',name:'btn',text:'<p>Je teste mon éligibilité</p>'}},
                          {type:'p',prop:{text:"Elle est cumulable avec la plupart des dispositifs d'aide à la rénovation (CITE, Eco PTZ, etc.)."}},
                        ]
                      }
                    ]
                  }
                ]
              },
              { // MaPrimeRénov
                type:'div',
                prop:{
                  class:'service',
                  name:'maprimerenov',
                  value:1,
                  // style:'height : '+screen.stats.height*0.8+'px;'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'desc'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{
                          name:'title'
                        },
                        childrens:[
                          {
                            type:'div',
                            prop:{text:'<h2>MaPrimeRénov</h2>'}
                          }
                        ]
                      },
                      {
                        type:'div',
                        prop:{name:"subDesc"},
                        childrens:[
                          {type:'p',prop:{text:"Mise en place depuis le 1er Janvier 2020, MaPrimeRénov' regroupe le CITE (crédit d'impôt pour la transition énergétique) et l'Anah 'Agilité'."}},
                          {type:'p',prop:{text:"Le dispositif est renforcé depuis le 1er octobre 2020, dans le cadre du 'Plan de relance de l'économie'."}},
                          {type:'p',prop:{text:"Cette aide accompagne tous les foyers dans le financement de leurs travaux, en versant une prime dès la fin du chantier. "}},
                        ]
                      },
                      {
                        type:'ul',
                        prop:{text:"Bénéficiaires et conditions d'accès :"},
                        childrens:[
                          {type:'li',prop:{text:"Propriétaires occupants (résidence principale), propriétaires bailleurs (location à titre de résidence principale), copropriété (travaux en parties communes)"}},
                          {type:'li',prop:{text:"Logement de plus de 2 ans en France métropolitaine"}},
                          {type:'li',prop:{text:"Travaux réalisés par des artisans RGE"}},
                          {type:'li',prop:{text:"Matériels éligibles"}},
                        ]
                      },
                      {
                        type:'div',
                        prop:{name:"endDesc"},
                        childrens:[
                          {type:'p',prop:{text:"En fonction des revenus du foyer et du gain écologique dû aux travaux, le montant de la prime est calculé et forfaitaire."}},
                          {type:'div',prop:{style:'grid-row:1;grid-column:2;',onclick:'scrollLink(86)',name:'btn',text:'<p>Je teste mon éligibilité</p>'}},
                          {type:'p',prop:{text:"Elle est cumulable avec la plupart des dispositifs d'aide à la rénovation (CEE, Action Logement, etc.)."}},
                        ]
                      }
                    ]
                  }
                ]
              },
              { // CITE
                type:'div',
                prop:{
                  class:'service',
                  name:'cite',
                  value:0,
                  // style:'height : '+screen.stats.height*0.8+'px;'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'desc'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{
                          name:'title'
                        },
                        childrens:[
                          {
                            type:'div',
                            prop:{text:'<h2>CITE</h2>'}
                          }
                        ]
                      },
                      {
                        type:'div',
                        prop:{name:"subDesc"},
                        childrens:[
                          {type:'p',prop:{text:"Le crédit d'impôt pour la transition énergétique, mis en place en 2014, permet de déduire une partie des dépenses éligibles (pour des travaux d'amélioration de performance énergétique) de l'impôt sur le revenu."}},
                          {type:'p',prop:{text:"Il concerne uniquement les ménages aux revenus 'intermédiaires' et 'supérieurs'."}},
                          {type:'p',prop:{text:"Les revenus 'très modestes' et 'modestes' sont éligibles à MaPrimeRénov'."}},
                        ]
                      },
                      {
                        type:'ul',
                        prop:{text:"Bénéficiaires et conditions d'accès :"},
                        childrens:[
                          {type:'li',prop:{text:"Propriétaires occupants, locataires"}},
                          {type:'li',prop:{text:"Logement de plus de 2 ans en France métropolitaine (résidence principale)"}},
                          {type:'li',prop:{text:"Travaux réalisés par des artisans RGE"}},
                          {type:'li',prop:{text:"Matériels éligibles"}},
                        ]
                      },
                      {
                        type:'div',
                        prop:{name:"endDesc"},
                        childrens:[
                          {type:'p',prop:{text:"En fonction des revenus du foyer, le montant de la prime est calculé et forfaitaire. Le montant est plafonné sur une période de 5 ans."}},
                          {type:'div',prop:{style:'grid-row:1;grid-column:2;',onclick:'scrollLink(86)',name:'btn',text:'<p>Je teste mon éligibilité</p>'}},
                          {type:'p',prop:{text:"Elle est cumulable avec la plupart des dispositifs d'aide à la rénovation (Eco-Chèque, CEE, etc.)."}},
                        ]
                      }
                    ]
                  }
                ]
              },
              { // Éco-Chèque
                type:'div',
                prop:{
                  class:'service',
                  name:'eco_cheque',
                  value:1,
                  // style:'height : '+screen.stats.height*0.8+'px;'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'desc'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{
                          name:'title'
                        },
                        childrens:[
                          {
                            type:'div',
                            prop:{text:'<h2>Éco-Chèque </h2>'}
                          }
                        ]
                      },
                      {
                        type:'div',
                        prop:{name:"subDesc"},
                        childrens:[
                          {type:'p',prop:{text:"L'éco-chèque logement accompagne financièrement les foyers de la Région Occitanie dans leur transition énergétique"}},
                          {type:'p',prop:{text:"Il fait partie des aides mises en place par les collectivités locales et régionales."}},
                          {type:'p',prop:{text:"Vous pouvez bénéficier d'aides complémentaires en fonction de votre commune de résidence."}},
                        ]
                      },
                      {
                        type:'ul',
                        prop:{text:"Bénéficiaires et conditions d'accès :"},
                        childrens:[
                          {type:'li',prop:{text:"Propriétaires occupants, propriétaires bailleurs en Région Occitanie"}},
                          {type:'li',prop:{text:"Minimum de 25% d'économie d'énergie réalisé grâce aux travaux de rénovation"}},
                        ]
                      },
                      {
                        type:'div',
                        prop:{name:"endDesc"},
                        childrens:[
                          {type:'p',prop:{text:"En fonction du type de propriétaires (bailleurs ou occupants) le montant de l'aide varie de 1000€ à 1500€."}},
                          {type:'div',prop:{style:'grid-row:1;grid-column:2;',onclick:'scrollLink(86)',name:'btn',text:'<p>Je teste mon éligibilité</p>'}},
                          {type:'p',prop:{text:"Elle est cumulable avec la plupart des dispositifs d'aide à la rénovation (MaPrimeRénov, Action Logement, etc.)."}},
                        ]
                      }
                    ]
                  }
                ]
              },
              { // Action Logement
                type:'div',
                prop:{
                  class:'service',
                  name:'action_Logement',
                  value:0,
                  // style:'height : '+screen.stats.height*0.8+'px;'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'desc'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{
                          name:'title'
                        },
                        childrens:[
                          {
                            type:'div',
                            prop:{text:'<h2>Action Logement</h2>'}
                          }
                        ]
                      },
                      {
                        type:'div',
                        prop:{name:"subDesc"},
                        childrens:[
                          {type:'p',prop:{text:"L'Aide à Action Logement mise en place en septembre 2019 confirme l'objectif de transition énergétique de la France."}},
                          {type:'p',prop:{text:"Elle accorde un prêt complémentaire à 1% et une subvention non négligeable."}},
                          {type:'p',prop:{text:"Les travaux doivent prioritairement améliorer l'isolation, ou à défaut le système de chauffage ou d'eau chaude sanitaire."}},
                        ]
                      },
                      {
                        type:'ul',
                        prop:{text:"Bénéficiaires et conditions d'accès :"},
                        childrens:[
                          {type:'li',prop:{text:"Propriétaires occupants, propriétaires bailleurs (logeant des salariés du secteur privé)"}},
                          {type:'li',prop:{text:"Salariés du secteur privé "}},
                          {type:'li',prop:{text:"Logement situé en zone B2 ou C ou dans une des communes du programme 'action coeur de ville'"}},
                          {type:'li',prop:{text:"Travaux réalisés par des artisans RGE"}},
                          {type:'li',prop:{text:"Matériels éligibles"}},
                          {type:'li',prop:{text:"Intervention d'un AMO (Assistant à Maîtrise d'Ouvrage)"}},
                        ]
                      },
                      {
                        type:'div',
                        prop:{name:"endDesc"},
                        childrens:[
                          {type:'p',prop:{text:"En fonction des ressources du foyer, du type de propriétaire (bailleur ou occupant), le montant de la subvention peut atteindre 15 000€ ou 20 000€. Si le montant des travaux est supérieur à ces montants, il est possible de bénéficier d'un prêt complémentaire jusqu'à 30 000€ (au taux annuel de 1%)."}},
                          {type:'div',prop:{style:'grid-row:1;grid-column:2;',onclick:'scrollLink(86)',name:'btn',text:'<p>Je teste mon éligibilité</p>'}},
                          {type:'p',prop:{text:"Elle est cumulable avec la plupart des dispositifs d'aide à la rénovation (Eco PTZ, MaPrimeRénov', etc.)."}},
                        ]
                      }
                    ]
                  }
                ]
              },
              { // TVA 5,5%
                type:'div',
                prop:{
                  class:'service',
                  name:'TVA',
                  value:1,
                  // style:'height : '+screen.stats.height*0.8+'px;'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      name:'desc'
                    },
                    childrens:[
                      {
                        type:'div',
                        prop:{
                          name:'title'
                        },
                        childrens:[
                          {
                            type:'div',
                            prop:{text:'<h2>TVA 5,5%</h2>'}
                          }
                        ]
                      },
                      {
                        type:'div',
                        prop:{name:"subDesc"},
                        childrens:[
                          {type:'p',prop:{text:"La TVA à taux réduit est appliquée pour les travaux de rénovation de performance énergétique."}},
                          {type:'p',prop:{text:"Généralement, le taux de TVA appliqué aux travaux de rénovation est de 10%."}},
                          {type:'p',prop:{text:"Ce taux réduit concerne également les travaux induits par le chantier de rénovation énergétique."}},
                        ]
                      },
                      {
                        type:'ul',
                        prop:{text:"Bénéficiaires et conditions d'accès :"},
                        childrens:[
                          {type:'li',prop:{text:"Propriétaires occupants, locataires, SCI, bailleurs ou syndicat de propriétaires"}},
                          {type:'li',prop:{text:"Logement de plus de 2 ans en France métropolitaine (principale ou secondaire)"}},
                        ]
                      },
                    ]
                  }
                ]
              },
            ]
          },
          {type:'div',prop:{id:'eligibilite',name:'eligibilite'},
          childrens:[
            {type:'h1',prop:{text:"formulaire d'eligibilite"}},
            {type:'div',prop:{name:'type'},
            childrens:[
                {type:'p',prop:{text:"Je suis :",name:"titre"},},
                {type:'p',prop:{text:"Propriétaire",onclick:'turnActive(this,null,radioLike(this))',type:'input'},},
                {type:'p',prop:{text:"Locataire",onclick:'turnActive(this,null,radioLike(this))',type:'input'},},
                {type:'p',prop:{text:"Bailleur",onclick:'turnActive(this,null,radioLike(this))',type:'input'},},
            ]},
            {type:'div',prop:{name:'travailleur'},
            childrens:[
                {type:'p',prop:{text:"Je suis :",name:"titre"},},
                {type:'p',prop:{text:"Travailleur du privé",onclick:'turnActive(this,null,radioLike(this))',type:'input'},},
                {type:'p',prop:{text:"Travailleur du public",onclick:'turnActive(this,null,radioLike(this))',type:'input'},},
                {type:'p',prop:{text:"Retraité",onclick:'turnActive(this,null,radioLike(this))',type:'input'},},
                {type:'p',prop:{text:"Sans emploi",onclick:'turnActive(this,null,radioLike(this))',type:'input'},},
            ]},
            {type:'div',prop:{name:'revenu'},
            childrens:[
                {type:'p',prop:{text:"Revenu fiscal de mon foyer : ",name:"titre"},},
                {type:'p',prop:{text:"< 15.000€",onclick:'turnActive(this,null,radioLike(this))',type:'input'},},
                {type:'p',prop:{text:"15.000€ à 25.000€",onclick:'turnActive(this,null,radioLike(this))',type:'input'},},
                {type:'p',prop:{text:"25.000€ à 40.000€",onclick:'turnActive(this,null,radioLike(this))',type:'input'},},
                {type:'p',prop:{text:"> 40.000€",onclick:'turnActive(this,null,radioLike(this))',type:'input'},},
            ]},
            {type:'div',prop:{name:'nbrper'},
            childrens:[
                {type:'p',prop:{text:"Nombre de personnes dans mon foyer :",name:"titre"},},
                {type:'p',prop:{text:"1",onclick:'turnActive(this,null,radioLike(this))',type:'input'},},
                {type:'p',prop:{text:"2",onclick:'turnActive(this,null,radioLike(this))',type:'input'},},
                {type:'p',prop:{text:"3",onclick:'turnActive(this,null,radioLike(this))',type:'input'},},
                {type:'p',prop:{text:"4",onclick:'turnActive(this,null,radioLike(this))',type:'input'},},
                {type:'p',prop:{text:"+ de 4",onclick:'turnActive(this,null,radioLike(this))',type:'input'},},
            ]},
            {type:'div',prop:{name:'mail'},childrens:[{type:'p',name:'type',prop:{text:'Adresse Mail : '}},{type:'input',prop:{name:'mail',placeholder:"exemple@exemple.com"}}]},
            {type:'div',prop:{name:'btn',onclick:'traiter_formulaire(this.parentNode)'},
            childrens:[
                {type:'p',prop:{text:"Suis-je éligible ?"},},
            ]},
            {type:'div',prop:{name:'img'}}
          ]},
          //
          // Félécitation ! Vous êtes éligible !
          //
          // Pour conaitre et recevoir le montant de vos aides et subventions quelques informations complémentaires sont utiles :
            // Département
            // Téléphone
            // J'accepte "condition d'utilisation"
            // btn "Transferer la demande"
          //
          footer
        ]
      }
    ],
    contact : [
      {
        type:'div',
        prop:{
          id:'box',
          name:'contact',
          style:'height:'+screen.stats.height+'px;',
        },
        childrens:[
          {
            type:'div',
            prop:{
              name:'boxContainer'
            },
            childrens:[
              {
                type:'div',
                prop:{
                  name:'delete'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      class:'btn',
                      name:'annuler',
                      onclick:'closeBox()'
                    },
                  }
                ]
              },
              {
                type:'div',
                prop:{
                  name:'info',
                  text:"<p>Contactez-nous au 05 63 74 54 99 du lundi au vendredi de 9h à 18h</p><p>Par mail : contact@groupe-agibat.fr</p><p name='contact'>Prennez contact avec un consultant spécialisé</p>"}
              },
              {
                type:'div',
                prop:{
                  name:'formulary'
                },
                childrens:[
                  { // facultatif
                    type:'div',
                    prop:{name:'facultatif'},
                    childrens:[
                      {
                        type:'input',
                        prop:{
                          placeholder:'Nom*',
                          type:'obligatoire',
                          name:'nom'
                        }
                      },
                      {
                        type:'input',
                        prop:{
                          placeholder:'Prenom',
                          name:'prenom'
                        }
                      },
                      // {
                      //   type:'input',
                      //   prop:{
                      //     placeholder:'ville*',
                      //     name:'ville'
                      //   }
                      // },
                      {
                        type:'input',
                        prop:{
                          placeholder:'Code postal*',
                          type:'obligatoire',
                          name:'cp'
                        }
                      },
                    ]
                  },
                  { // obligatoire
                    type:'div',
                    prop:{name:'obligatoire'},
                    childrens:[
                      {
                        type:'input',
                        prop:{
                          placeholder:'Adresse',
                          name:'adresse'
                        }
                      },
                      {
                        type:'input',
                        prop:{
                          placeholder:'Adresse mail',
                          name:'adresse_mail'
                        }
                      },
                      {
                        type:'input',
                        prop:{
                          placeholder:'Téléphone*',
                          type:'obligatoire',
                          name:'telephone'
                        }
                      },
                      {
                        type:'textarea',
                        prop:{
                          placeholder:'Message',
                          name:'message'
                        }
                      }
                    ]
                  },
                  {
                    type:'div',
                    prop:{
                      name:'prestations'
                    },
                    childrens:[
                      {
                        type:'input',
                        prop:{
                          name:'presta',
                          type:'checkbox'
                        }
                      },
                      {
                        type:'p',
                        prop:{
                          text:'Isolation'
                        }
                      },
                      {
                        type:'input',
                        prop:{
                          name:'presta',
                          type:'checkbox'
                        }
                      },
                      {
                        type:'p',
                        prop:{
                          text:'Chauffage/ Climatisation'
                        }
                      },
                      {
                        type:'input',
                        prop:{
                          name:'presta',
                          type:'checkbox'
                        }
                      },
                      {
                        type:'p',
                        prop:{
                          text:"Production d'eau chaude"
                        }
                      },
                      {
                        type:'input',
                        prop:{
                          name:'presta',
                          type:'checkbox'
                        }
                      },
                      {
                        type:'p',
                        prop:{
                          text:"Couverture / Zinguerie"
                        }
                      },
                      {
                        type:'input',
                        prop:{
                          name:'presta',
                          type:'checkbox'
                        }
                      },
                      {
                        type:'p',
                        prop:{
                          text:"Traitement"
                        }
                      },
                      {
                        type:'input',
                        prop:{
                          name:'presta',
                          type:'checkbox'
                        }
                      },
                      {
                        type:'p',
                        prop:{
                          text:"Production d'électricité"
                        }
                      },
                      {
                        type:'input',
                        prop:{
                          name:'presta',
                          type:'checkbox'
                        }
                      },
                      {
                        type:'p',
                        prop:{
                          text:"Aides / Subventions"
                        }
                      },
                      {
                        type:'input',
                        prop:{
                          name:'presta',
                          type:'checkbox'
                        }
                      },
                      {
                        type:'p',
                        prop:{
                          text:"Offres à partir de 1€"
                        }
                      },
                      {
                        type:'input',
                        prop:{
                          name:'presta',
                          type:'checkbox'
                        }
                      },
                      {
                        type:'p',
                        prop:{
                          text:"Autres"
                        }
                      },
                    ]
                  }
                ]
              },
              {
                type:'div',
                prop:{
                  name:'option',
                  text:"<label onclick='turnActive(this.parentNode.parentNode.children[4].children[0])'><input type='checkbox'></input></label><p>J'accepte que les informations soient recueillies par AGIBAT  pour permettre ma demande de contact et la relation commerciale qui peut en découler*</p>"
                }
              },
              {
                type:'div',
                prop:{
                  name:'validation'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      class:'btn',
                      name:'valider',onclick:'traiter_formulaire(this.parentNode.parentNode)'
                    },
                    childrens:[
                      {
                        type:'p',
                        prop:{text:'Envoyer'}
                      }
                    ]
                  },
                ]
              },
            ]
          }
        ]
      }
    ],
    rappel : [
      {
        type:'div',
        prop:{
          id:'box',
          name:'rappel',
          style:'height:'+screen.stats.height+'px;',
        },
        childrens:[
          {
            type:'div',
            prop:{
              name:'boxContainer'
            },
            childrens:[
              {
                type:'div',
                prop:{
                  name:'delete'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      class:'btn',
                      name:'annuler',
                      onclick:'closeBox()'
                    },
                  }
                ]
              },
              {
                type:'div',
                prop:{
                  name:'info',
                  text:"<h1>Demande de rappel</h1><p name='contact'>Remplissez les champs ci dessous pour être rappelé</p>"}
              },
              {
                type:'div',
                prop:{
                  name:'formulary'
                },
                childrens:[
                  { // facultatif
                    type:'div',
                    prop:{name:'facultatif'},
                    childrens:[
                      {
                        type:'input',
                        prop:{
                          placeholder:'Nom Prenom',
                          type:'obligatoire',
                          name:'nom_prenom'
                        }
                      },
                    ]
                  },
                  { // obligatoire
                    type:'div',
                    prop:{name:'obligatoire'},
                    childrens:[
                      {
                        type:'input',
                        prop:{
                          placeholder:'Téléphone',
                          type:'obligatoire',
                          name:'telephone'
                        }
                      }
                    ]
                  },
                ]
              },
              {
                type:'div',
                prop:{
                  name:'option',
                  text:"<label onclick='turnActive(this.parentNode.parentNode.children[4].children[0])'><input type='checkbox'></input></label><p>J'accepte que les informations soient recueillies par AGIBAT  pour permettre ma demande de contact et la relation commerciale qui peut en découler*</p>"
                }
              },
              {
                type:'div',
                prop:{
                  name:'validation'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      class:'btn',
                      name:'valider',onclick:'traiter_formulaire(this.parentNode.parentNode)'

                    },
                    childrens:[
                      {
                        type:'p',
                        prop:{text:'Envoyer'}
                      }
                    ]
                  },
                ]
              },
            ]
          }
        ]
      }
    ],
    eligibilite : [
      {
        type:'div',
        prop:{
          id:'box',
          name:'eligibilite',
          style:'height:'+screen.stats.height+'px;',
        },
        childrens:[
          {
            type:'div',
            prop:{
              name:'boxContainer'
            },
            childrens:[
              {
                type:'div',
                prop:{
                  name:'delete'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      class:'btn',
                      name:'annuler',
                      onclick:'closeBox()'
                    },
                  }
                ]
              },
              {
                type:'div',
                prop:{
                  name:'info',
                  text:"<h1>Félécitation !</h1><p>Vous êtes éligible !</p>"}
              },
              {
                type:'div',
                prop:{
                  name:'formulary'
                },
                childrens:[
                  { // facultatif
                    type:'div',
                    prop:{name:'facultatif'},
                    childrens:[
                      {
                        type:'p',
                        prop:{
                          text:"Pour connaître vos droits aux aides et subventions, quelques informations complémentaires nous sont utiles :"
                        }
                      },
                    ]
                  },
                  { // obligatoire
                    type:'div',
                    prop:{name:'obligatoire'},
                    childrens:[
                      {
                        type:'input',
                        prop:{
                          placeholder:'Département',
                          name:'departement'
                        }
                      },
                      {
                        type:'input',
                        prop:{
                          placeholder:'Téléphone',
                          name:'telephone'
                        }
                      }
                    ]
                  },
                ]
              },
              {
                type:'div',
                prop:{
                  name:'option',
                  text:"<label onclick='turnActive(this.parentNode.parentNode.children[4].children[0])'><input type='checkbox'></input></label><p>J'accepte que les informations soient recueillies par AGIBAT  pour permettre ma demande de contact et la relation commerciale qui peut en découler*</p>"
                }
              },
              {
                type:'div',
                prop:{
                  name:'validation'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      class:'btn',
                      name:'valider',onclick:'traiter_formulaire(this.parentNode.parentNode)'

                    },
                    childrens:[
                      {
                        type:'p',
                        prop:{text:'Transmettre ma demande'}
                      }
                    ]
                  },
                ]
              },
            ]
          }
        ]
      }
    ],
    diagnostic : [
      {
        type:'div',
        prop:{
          id:'box',
          name:'diagnostic',
          style:'height:'+screen.stats.height+'px;',
        },
        childrens:[
          {
            type:'div',
            prop:{
              name:'boxContainer'
            },
            childrens:[
              {
                type:'div',
                prop:{
                  name:'delete'
                },
                childrens:[
                  {
                    type:'div',
                    prop:{
                      class:'btn',
                      name:'annuler',
                      onclick:'closeBox()'
                    },
                  }
                ]
              },
              {  // Type de traveaux ?
                type:'div',
                prop:{name:'step',value:'0',class:'active'},
                childrens:[
                  {type:'h2',prop:{text:'Je simule mon diagnostic'}},
                  // {type:'p',prop:{name:'question',text:'Vos données restent confidentielles.',style:'grid-row: 2;'}},
                  {type:'div',prop:{name:'iconBtn',style:'grid-row: 2;'},childrens:[
                    // {type:'div',prop:{name:'icon',value:'Isolation',style:'grid-column:1;'},childrens:[{type:'p',prop:{text:'Isolation thermique'}}]},
                    // {type:'div',prop:{name:'icon',value:'fenetres',style:'grid-column:2;'},childrens:[{type:'p',prop:{text:'fenêtres, volets et portes'}}]},
                    // {type:'div',prop:{name:'icon',value:'chauffage',style:'grid-column:3;'},childrens:[{type:'p',prop:{text:'Chauffage / climatisation'}}]},
                    // {type:'div',prop:{name:'icon',value:'ventilation',style:'grid-column:4;'},childrens:[{type:'p',prop:{text:'Ventilation'}}]},
                  ]},
                  {type:'div',prop:{name:'inputsForm',style:'grid-row: 3/5;'},childrens:[
                    {type:'input',prop:{name:'Nom',style:'grid-column:1;',placeholder:'Nom'}},
                    {type:'input',prop:{name:'Prenom',style:'grid-column:2;',placeholder:'Prénom'}},
                    {type:'input',prop:{name:'E-Mail',style:'grid-column:1;',placeholder:'E-Mail'}},
                    {type:'input',prop:{name:'Telephone',style:'grid-column:2;',placeholder:'Téléphone*'}},
                    {type:'input',prop:{name:'Code_Postal',style:'grid-column:1;',placeholder:'Code Postal'}},
                    {type:'input',prop:{name:'Ville',style:'grid-column:2;',placeholder:'Ville'}},
                  ]},
                  {
                    type:'div',
                    prop:{
                      name:'option',
                      text:"<label onclick='turnActive(this.parentNode.parentNode.children[4].children[0])'><input type='checkbox'></input></label><p>J'accepte que les informations soient recueillies par AGIBAT  pour permettre ma demande de contact et la relation commerciale qui peut en découler*</p>"
                    }
                  },
                  {type:'div',prop:{name:'btn',action:'next',onclick:'diagnosticSwitchUp(this.parentNode)'},childrens:[{type:'p',prop:{text:'DÉMARRER'}}]},
                ]
              },
              {  // maison | appartement ?
                type:'div',
                prop:{name:'step',value:'1'},
                childrens:[
                  {type:'h2',prop:{text:'Mon habitat'}},
                  {type:'p',prop:{name:'question',text:'Je vie dans :'}},
                  {type:'div',prop:{name:'iconBtn'},childrens:[
                    {type:'div',prop:{name:'icon',value:'Maison',style:'grid-column:1;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Maison'}}]},
                    {type:'div',prop:{name:'icon',value:'Appartement',style:'grid-column:2;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Appartement'}}]},
                  ]},
                  {type:'div',prop:{name:'inputsForm'},childrens:[
                    {type:'input',prop:{name:'Année de construction',placeholder:'Année de construction'}},
                    {type:'input',prop:{name:'Surface habitable',placeholder:'Surface habitable'}},
                    // {type:'input',prop:{name:'Nombre de niveau',placeholder:'Nombre de niveau'}},
                    {type:'select',prop:{name:'Nombre_niveau',placeholder:'Nombre de niveau'},childrens:[
                      {type:'option',prop:{text:"Pleins pied"}},
                      {type:'option',prop:{text:"1 étage"}},
                      {type:'option',prop:{text:"2 étages"}},
                      {type:'option',prop:{text:"2+ étages"}},
                    ]},
                  ]},
                  {type:'div',prop:{name:'btn',action:'prev',onclick:'diagnosticSwitchDown(this.parentNode)'},childrens:[{type:'p',prop:{text:'PRÉCÉDENT'}}]},
                  {type:'div',prop:{name:'btn',action:'next',onclick:'diagnosticSwitchUp(this.parentNode)'},childrens:[{type:'p',prop:{text:'VALIDER'}}]},
                ]
              },
              {  // Quels travaux avez-vous réalisés depuis 2000 ?
                type:'div',
                prop:{name:'step',value:'2'},
                childrens:[
                  {type:'h2',prop:{text:'Mon habitat'}},
                  {type:'p',prop:{name:'question',text:'Mes travaux réalisés depuis 2000 ?'}},
                  {type:'div',prop:{name:'iconBtn'},childrens:[
                    {type:'div',prop:{name:'icon',value:'Isolation',style:'grid-column:1;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Isolation'}}]},
                    {type:'div',prop:{name:'icon',value:'Chauffage',style:'grid-column:2;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Chauffage'}}]},
                    {type:'div',prop:{name:'icon',value:'Climatisation',style:'grid-column:3;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Climatisation'}}]},
                    {type:'div',prop:{name:'icon',value:'eau',style:'grid-column:4;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Eau Chaude Sanitaire'}}]},
                    {type:'div',prop:{name:'icon',value:'Toiture',style:'grid-column:1;margin-top: 2vw;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Toiture'}}]},
                    {type:'div',prop:{name:'icon',value:'Façade',style:'grid-column:2;margin-top: 2vw;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Façade'}}]},
                  ]},
                  {type:'p',prop:{name:'question2',text:'Mes derniers travaux réalisés ?'}},
                  {type:'div',prop:{name:'inputsForm'},childrens:[
                    {type:'select',prop:{name:'Type',style:'grid-column:1;',placeholder:'Type'},childrens:[
                      {type:'option',prop:{text:"Isolation"}},
                      {type:'option',prop:{text:"Chauffage"}},
                      {type:'option',prop:{text:"Climatisation"}},
                      {type:'option',prop:{text:"Eau Chaude Sanitaire"}},
                      {type:'option',prop:{text:"Toiture"}},
                      {type:'option',prop:{text:"Façade"}},
                      {type:'option',prop:{text:"Autres"}}
                    ]},
                    {type:'input',prop:{name:'Année',style:'grid-column:2;',placeholder:'Année'}},
                  ]},
                  {type:'div',prop:{name:'btn',action:'prev',onclick:'diagnosticSwitchDown(this.parentNode)'},childrens:[{type:'p',prop:{text:'PRÉCÉDENT'}}]},
                  {type:'div',prop:{name:'btn',action:'next',onclick:'diagnosticSwitchUp(this.parentNode)'},childrens:[{type:'p',prop:{text:'VALIDER'}}]},
                ]
              },
              {  // Quels travaux avez-vous réalisés depuis 2000 ?
                type:'div',
                prop:{name:'step',value:'3'},
                childrens:[
                  {type:'h2',prop:{text:'Mon habitat'}},
                  {type:'p',prop:{name:'question',text:'Quel type de couverture ais-je ? '}},
                  {type:'div',prop:{name:'iconBtn'},childrens:[
                    {type:'div',prop:{name:'icon',value:'TuileM',style:'grid-column:1;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Tuile mécanique'}}]},
                    {type:'div',prop:{name:'icon',value:'TuileC',style:'grid-column:2;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Tuile canal'}}]},
                    {type:'div',prop:{name:'icon',value:'Ardoise',style:'grid-column:3;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Ardoise'}}]},
                    {type:'div',prop:{name:'icon',value:'Panneaux',style:'grid-column:4;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Panneaux sandwich'}}]},
                    {type:'div',prop:{name:'icon',value:'Fibro',style:'grid-column:1;margin-top: 2vw;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Fibro ciment'}}]},
                    {type:'div',prop:{name:'icon',value:'Zinc',style:'grid-column:2;margin-top: 2vw;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Zinc'}}]},
                    {type:'div',prop:{name:'icon',value:'Terrasse',style:'grid-column:3;margin-top: 2vw;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Terrasse'}}]},
                    {type:'div',prop:{name:'icon',value:'Shingle',style:'grid-column:4;margin-top: 2vw;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Shingle'}}]},
                    {type:'div',prop:{name:'icon',value:'Photovoltaïque',style:'grid-column:1;margin-top: 3vw;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Photovoltaïque'}}]},
                  ]},
                  {type:'div',prop:{name:'inputsForm'},childrens:[
                    {type:'input',prop:{name:'annee',style:'grid-column:1;',placeholder:"Date du dernier entretien de ma toiture"}},
                  ]},
                  {type:'div',prop:{name:'btn',action:'prev',onclick:'diagnosticSwitchDown(this.parentNode)'},childrens:[{type:'p',prop:{text:'PRÉCÉDENT'}}]},
                  {type:'div',prop:{name:'btn',action:'next',onclick:'diagnosticSwitchUp(this.parentNode)'},childrens:[{type:'p',prop:{text:'VALIDER'}}]},
                ]
              },
              {  // Quels travaux avez-vous réalisés depuis 2000 ?
                type:'div',
                prop:{name:'step',value:'4'},
                childrens:[
                  {type:'h2',prop:{text:'Mon habitat'}},
                  {type:'p',prop:{name:'question',text:'Quel type de charpente'}},
                  {type:'div',prop:{name:'iconBtn'},childrens:[
                    {type:'div',prop:{name:'icon',value:'Traditionnel',style:'grid-column:1;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Traditionnel'}}]},
                    {type:'div',prop:{name:'icon',value:'Fermette',style:'grid-column:2;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Fermette'}}]},
                    {type:'div',prop:{name:'icon',value:'metalique',style:'grid-column:3;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Métallique'}}]},
                    {type:'div',prop:{name:'icon',value:'beton',style:'grid-column:4;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Béton'}}]},
                  ]},
                  {type:'div',prop:{name:'inputsForm'},childrens:[
                    {type:'input',prop:{name:'annee',style:'grid-column:1;',placeholder:"Dernier entretien de ma charpente"}},
                  ]},
                  {type:'div',prop:{name:'btn',action:'prev',onclick:'diagnosticSwitchDown(this.parentNode)'},childrens:[{type:'p',prop:{text:'PRÉCÉDENT'}}]},
                  {type:'div',prop:{name:'btn',action:'next',onclick:'diagnosticSwitchUp(this.parentNode)'},childrens:[{type:'p',prop:{text:'VALIDER'}}]},
                ]
              },
              {  // Quels travaux avez-vous réalisés depuis 2000 ?
                type:'div',
                prop:{name:'step',value:'5'},
                childrens:[
                  {type:'h2',prop:{text:'Mon habitat'}},
                  {type:'p',prop:{name:'question',text:"Pour me chauffer j'utilise"}},
                  {type:'div',prop:{name:'iconBtn'},childrens:[
                    {type:'div',prop:{name:'icon',value:'electrique',style:'grid-column:1;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Électricité'}}]},
                    {type:'div',prop:{name:'icon',value:'Gaz-naturel',style:'grid-column:2;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Gaz naturel'}}]},
                    {type:'div',prop:{name:'icon',value:'Gaz-propane',style:'grid-column:3;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Gaz propane'}}]},
                    {type:'div',prop:{name:'icon',value:'Fioul',style:'grid-column:4;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Fioul'}}]},
                    {type:'div',prop:{name:'icon',value:'Bois',style:'grid-column:1;margin-top: 2vw;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Bois'}}]},
                    {type:'div',prop:{name:'icon',value:'Pompe_challeur',style:'grid-column:2;margin-top: 2vw;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Pompe à chaleur'}}]},
                    {type:'div',prop:{name:'icon',value:'Climatiseur',style:'grid-column:3;margin-top: 2vw;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Climatiseur réversible'}}]},
                    {type:'div',prop:{name:'icon',value:'SystèmeSolaire',style:'grid-column:4;margin-top: 2vw;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Système solaire combiné'}}]},
                  ]},
                  {type:'div',prop:{name:'inputsForm'},childrens:[
                    {type:'input',prop:{name:'annee',style:'grid-column:1;',placeholder:"Date de l'installation"}},
                  ]},
                  {type:'div',prop:{name:'btn',action:'prev',onclick:'diagnosticSwitchDown(this.parentNode)'},childrens:[{type:'p',prop:{text:'PRÉCÉDENT'}}]},
                  {type:'div',prop:{name:'btn',action:'next',onclick:'diagnosticSwitchUp(this.parentNode)'},childrens:[{type:'p',prop:{text:'VALIDER'}}]},
                ]
              },
              {  // Toiture
                type:'div',
                prop:{name:'step',value:'6'},
                childrens:[
                  {type:'h2',prop:{text:'Mon habitat'}},
                  {type:'p',prop:{name:'question',text:'Mon eau chaude sanitaire est produite par'}},
                  {type:'div',prop:{name:'iconBtn'},childrens:[
                    {type:'div',prop:{name:'icon',value:'electrique',style:'grid-column:1;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Ballon électrique'}}]},
                    {type:'div',prop:{name:'icon',value:'chaudiere',style:'grid-column:2;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Système couplé à la chaudière'}}]},
                    {type:'div',prop:{name:'icon',value:'thermodynamique',style:'grid-column:3;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Chauffe-eau thermodynamique'}}]},
                    {type:'div',prop:{name:'icon',value:'solaire',style:'grid-column:4;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Chauffe-eau solaire'}}]},
                  ]},
                  {type:'div',prop:{name:'btn',action:'prev',onclick:'diagnosticSwitchDown(this.parentNode)'},childrens:[{type:'p',prop:{text:'PRÉCÉDENT'}}]},
                  {type:'div',prop:{name:'btn',action:'next',onclick:'diagnosticSwitchUp(this.parentNode)'},childrens:[{type:'p',prop:{text:'VALIDER'}}]},
                ]
              },
              {  // Revenus ?
                type:'div',
                prop:{name:'step',value:'7'},
                childrens:[
                  {type:'h2',prop:{text:'Mon foyer'}},
                  {type:'p',prop:{name:'question',text:'Mes subvention'}},
                  {type:'div',prop:{name:'iconBtn'},childrens:[]},
                  {type:'div',prop:{name:'inputsForm'},childrens:[
                    // {type:'input',prop:{name:'enfant',style:'grid-column:1;',placeholder:"Nombre d'enfant dans vote foyer"}},
                    {type:'select',prop:{name:'enfant',placeholder:'Type'},childrens:[
                      {type:'option',prop:{text:"Sans enfant"}},
                      {type:'option',prop:{text:"1 enfant"}},
                      {type:'option',prop:{text:"2 enfants"}},
                      {type:'option',prop:{text:"2+ enfants"}},
                    ]},
                    // {type:'input',prop:{name:'autres',style:'grid-column:2;',placeholder:"Nombre d'autres personne au foyer"}},
                    {type:'select',prop:{name:'adultes',placeholder:'Type'},childrens:[
                      {type:'option',prop:{text:"1 adulte au foyer"}},
                      {type:'option',prop:{text:"2 adultes au foyer"}},
                      {type:'option',prop:{text:"3 adultes au foyer"}},
                      {type:'option',prop:{text:"4 adultes au foyer"}},
                      {type:'option',prop:{text:"4+ adultes au foyer"}},
                    ]},
                    {type:'input',prop:{name:'fiscal',style:'grid-column:3;',placeholder:'Revenu fiscal de référence'}},
                  ]},
                  {type:'div',prop:{name:'btn',action:'prev',onclick:'diagnosticSwitchDown(this.parentNode)'},childrens:[{type:'p',prop:{text:'PRÉCÉDENT'}}]},
                  {type:'div',prop:{name:'btn',action:'next',onclick:'diagnosticSwitchUp(this.parentNode)'},childrens:[{type:'p',prop:{text:'VALIDER'}}]},
                ]
              },
              {  // Revenus ?
                type:'div',
                prop:{name:'step',value:'8'},
                childrens:[
                  {type:'h2',prop:{text:'Mes besoins'}},
                  {type:'p',prop:{name:'question',text:'Sélectionner votre diagnostic'}},
                  {type:'div',prop:{name:'iconBtn'},childrens:[
                    {type:'div',prop:{name:'icon',value:'Diagnostique_energetique',style:'grid-column:1;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Diagnostic énergétique'}}]},
                    {type:'div',prop:{name:'icon',value:'Diagnostique_habitat',style:'grid-column:2;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:"Diagnostic de l'habitat"}}]},
                    {type:'div',prop:{name:'icon',value:'Diagnostique_complet',style:'grid-column:3;',onclick:'turnActive(this,radioLikeClassActive(this,this.parentNode))'},childrens:[{type:'p',prop:{text:'Diagnostic complet'}}]},
                  ]},
                  {type:'div',prop:{name:'inputsForm'},childrens:[
                    {type:'input',prop:{name:'enfant',style:'grid-column:1/3;',placeholder:"Type de travaux souhaité ? "}},
                  ]},
                  {type:'div',prop:{name:'btn',action:'prev',onclick:'diagnosticSwitchDown(this.parentNode)'},childrens:[{type:'p',prop:{text:'PRÉCÉDENT'}}]},
                  {type:'div',prop:{name:'btn',action:'next',onclick:'traiter_formulaire(this.parentNode.parentNode)'},childrens:[{type:'p',prop:{text:'TERMINER'}}]},
                ]
              }
              //
              // Diagnostique énergétique
              // Diagnostique de l'habitat
              // Diagnostique complet
              // Si vous ne savez pas encore, rassurez vous , cliquer ici nous vous conseillerons
            ]
          }
        ]
      }
    ],
    bannerContact : [
      {
        type:'div',
        prop:{
          id:'banner',
          name:'contact',
        },
        childrens:[
          {
            type:'p',
            prop:{
              name:'content',
              text:'<p>Être</p><p>rappelé</p>',
              onclick:'openBox("rappel")'
            }
          },
          {
            type:'div',
            prop:{
              name:'close',
              onclick:'closeBanner()'
            }
          }
        ]
      }
    ],
    // reponse_express : [
    //
    // ]
  };
}

function generateLipsum(max_words){
  var lipsum = new LoremIpsum();
  return lipsum.generate(max_words);
}

async function guiUpdate(req){
  return new Promise(async function(next){
    next();
  })
}
