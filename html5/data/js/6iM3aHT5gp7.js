window.globalProvideData('slide', '{"title":"Perhatikan gambar berikut ini!\\n\\n\\n\\n\\n\\n\\n\\n\\nApa benar panjang sisi AB adalah 15 cm?","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide1","width":1024,"height":768,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6iM3aHT5gp7","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5y9TOepTa7f.6JNoj3c9Eoc.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"5y9TOepTa7f.5n4R9UWEV7m.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.6aHnQXinPhz"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6qzq7MEPQx3.InvalidPromptSlide"}}]}]},"ReviewInt_5y9TOepTa7f":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5y9TOepTa7f.6JNoj3c9Eoc"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5y9TOepTa7f.5n4R9UWEV7m"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6aHnQXinPhz.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5y9TOepTa7f_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5y9TOepTa7f_IncorrectReview"}}]}]},"ReviewIntCorrectIncorrect_5y9TOepTa7f":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5y9TOepTa7f.6JNoj3c9Eoc.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5y9TOepTa7f.6JNoj3c9Eoc"}}]},{"kind":"adjustvar","variable":"5y9TOepTa7f.6JNoj3c9Eoc._hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"5y9TOepTa7f.6JNoj3c9Eoc._down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"5y9TOepTa7f.6JNoj3c9Eoc._disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"5y9TOepTa7f.6JNoj3c9Eoc.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"5y9TOepTa7f.6JNoj3c9Eoc"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5y9TOepTa7f.5n4R9UWEV7m"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_5y9TOepTa7f":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5y9TOepTa7f"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_5y9TOepTa7f":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"5y9TOepTa7f.6JNoj3c9Eoc.ActGrpSetDisabledState"},{"kind":"exe_actiongroup","id":"5y9TOepTa7f.5n4R9UWEV7m.ActGrpSetDisabledState"}]},"5y9TOepTa7f_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6GW90cUt9IY","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6aHnQXinPhz.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5o477yt1XHp.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5y9TOepTa7f"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6aHnQXinPhz.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6aHnQXinPhz.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5y9TOepTa7f"}]}]}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_6iM3aHT5gp7":{"kind":"actiongroup","actions":[{"kind":"playnextdrawslide"}]},"NavigationRestrictionPreviousSlide_6iM3aHT5gp7":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6GW90cUt9IY","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5y9TOepTa7f","typea":"var","valueb":"5o477yt1XHp","typeb":"string"}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"noteq","valuea":"6aHnQXinPhz.$Status","typea":"property","valueb":"incomplete","typeb":"string"},{"kind":"compare","operator":"noteq","valuea":"6aHnQXinPhz.$Status","typea":"property","valueb":"","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.#5o477yt1XHp_RetryModeFirstSlideJump","typea":"var","valueb":false,"typeb":"boolean"}]}},"thenActions":[{"kind":"adjustvar","variable":"_player.5o477yt1XHp_RetryModeFirstSlideJump","operator":"set","value":{"type":"boolean","value":true}},{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5o477yt1XHp"},"completed_slide_ref":{"type":"string","value":"_player.5rXBkXRJWo9.65MTmpxoA1j"},"status_filter":"incomplete"}],"elseActions":[{"kind":"adjustvar","variable":"_player.5o477yt1XHp_RetryModeFirstSlideJump","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6aHnQXinPhz.$Status","typea":"property","valueb":"incomplete","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"6aHnQXinPhz.$Status","typea":"property","valueb":"","typeb":"string"}]}},"thenActions":[{"kind":"adjustvar","variable":"_player.6iM3aHT5gp7_RetryModeInteractionIncompleteOnLoad","operator":"set","value":{"type":"boolean","value":true}}],"elseActions":[{"kind":"adjustvar","variable":"_player.6iM3aHT5gp7_RetryModeInteractionIncompleteOnLoad","operator":"set","value":{"type":"boolean","value":false}}]}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6qzq7MEPQx3","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6qzq7MEPQx3","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#5o477yt1XHp_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.5o477yt1XHp_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#5o477yt1XHp_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5y9TOepTa7f"}]},{"kind":"showtimer","id":"_player.5o477yt1XHp_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6GW90cUt9IY","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6GW90cUt9IY","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5y9TOepTa7f"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6GW90cUt9IY","typea":"var","valueb":"5o477yt1XHp","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5o477yt1XHp.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5y9TOepTa7f"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5o477yt1XHp.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5y9TOepTa7f"}]}]}],"elseActions":[{"kind":"exe_actiongroup","id":"5y9TOepTa7f_CheckAnswered"}]}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6GW90cUt9IY","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5y9TOepTa7f","typea":"var","valueb":"5o477yt1XHp","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5o477yt1XHp"},"completed_slide_ref":{"type":"string","value":"_player.5rXBkXRJWo9.65MTmpxoA1j"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6GW90cUt9IY","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5y9TOepTa7f","typea":"var","valueb":"5o477yt1XHp","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5o477yt1XHp"},"completed_slide_ref":{"type":"string","value":"_player.5rXBkXRJWo9.65MTmpxoA1j"},"status_filter":"incomplete"}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6iM3aHT5gp7"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6iM3aHT5gp7"}]},{"kind":"onbeforeslidejump","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6GW90cUt9IY","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#6iM3aHT5gp7_RetryModeInteractionIncompleteOnLoad","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6aHnQXinPhz.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"6aHnQXinPhz.$Status","typea":"property","valueb":"incorrect","typeb":"string"}]}]}},"thenActions":[{"kind":"cancel_event"},{"kind":"adjustvar","variable":"_player.6iM3aHT5gp7_RetryModeInteractionIncompleteOnLoad","operator":"set","value":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5y9TOepTa7f","typea":"var","valueb":"5o477yt1XHp","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5o477yt1XHp"},"completed_slide_ref":{"type":"string","value":"_player.5rXBkXRJWo9.65MTmpxoA1j"},"status_filter":"incomplete"}],"elseActions":[]}]}]}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":110,"id":"6Kiy7sGyJPJ"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":217359,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6kZqQU8Li8Z"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5y9TOepTa7f"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5y9TOepTa7f.6JNoj3c9Eoc"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5y9TOepTa7f.5n4R9UWEV7m"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5gCn5GoV6vu"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6fxhnwrGf9u"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5lMre54Sml2"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":25,"id":"01","url":"story_content/6lhx94xHk6j_80_DX2048_DY2048.swf","type":"normal","altText":"Evaluasi.png","width":1024,"height":768,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":512,"rotateYPos":384,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1024,"bottom":768,"altText":"Evaluasi.png","pngfb":false,"pr":{"l":"Lib","i":89}},"html5data":{"xPos":0,"yPos":0,"width":1024,"height":768,"strokewidth":0}},"width":1024,"height":768,"resume":true,"useHandCursor":true,"id":"6kZqQU8Li8Z"},{"kind":"scrollarea","contentwidth":870,"contentheight":120,"objects":[{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6g4JX1fUtnU_175286896","id":"01","linkId":"txt__default_6JNoj3c9Eoc","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":118,"bottom":49,"pngfb":false,"pr":{"l":"Lib","i":485}}}],"shapemaskId":"","xPos":99,"yPos":0,"tabIndex":5,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":423,"rotateYPos":30,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":479}},"html5data":{"xPos":0,"yPos":0,"width":847,"height":60,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":479}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-9,"top":-1,"right":847,"bottom":60,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":480}},"html5data":{"xPos":-9,"yPos":-1,"width":856,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Disabled_Review","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-9,"top":-1,"right":847,"bottom":60,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":480}},"html5data":{"xPos":-9,"yPos":-1,"width":856,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":479}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":481}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":481}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Review","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-9,"top":-1,"right":847,"bottom":60,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":482}},"html5data":{"xPos":-9,"yPos":-1,"width":856,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled_Review","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-9,"top":-1,"right":847,"bottom":60,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":482}},"html5data":{"xPos":-9,"yPos":-1,"width":856,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":481}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":483}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":483}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":483}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":484}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":484}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":484}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}}],"width":846,"height":60,"resume":true,"useHandCursor":true,"id":"6JNoj3c9Eoc","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_review","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5n4R9UWEV7m.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5n4R9UWEV7m._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5n4R9UWEV7m"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetReviewState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5yK08mMMql3_-1368854884","id":"01","linkId":"txt__default_5n4R9UWEV7m","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":111,"bottom":49,"pngfb":false,"pr":{"l":"Lib","i":486}}}],"shapemaskId":"","xPos":99,"yPos":60,"tabIndex":6,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":423,"rotateYPos":30,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":479}},"html5data":{"xPos":0,"yPos":0,"width":847,"height":60,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":479}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":479}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":481}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":481}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":481}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":483}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":483}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":483}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":484}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":484}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":847,"bottom":60,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":484}},"html5data":{"xPos":-1,"yPos":-1,"width":848,"height":61,"strokewidth":3}}}],"width":846,"height":60,"resume":true,"useHandCursor":true,"id":"5n4R9UWEV7m","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6JNoj3c9Eoc.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6JNoj3c9Eoc._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6JNoj3c9Eoc"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":false,"depth":1,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""}],"shapemaskId":"","xPos":51,"yPos":512,"tabIndex":4,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":461,"rotateYPos":101,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":75,"yPos":512,"width":921,"height":201,"strokewidth":0}},"width":945,"height":201,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":946,"bottom":202,"altText":"True/False","pngfb":false,"pr":{"l":"Lib","i":478}}},"id":"5y9TOepTa7f"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5gCn5GoV6vu_-1854274998","id":"01","linkId":"txt__default_5gCn5GoV6vu","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":517,"bottom":369,"pngfb":false,"pr":{"l":"Lib","i":488}}}],"shapemaskId":"","xPos":64,"yPos":112,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":461,"rotateYPos":186.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":922,"bottom":373,"altText":"Perhatikan gambar berikut ini!\\n\\n\\n\\n\\n\\n\\n\\n\\nApa benar panjang sisi AB adalah 15 cm?","pngfb":false,"pr":{"l":"Lib","i":487}},"html5data":{"xPos":0,"yPos":0,"width":922,"height":373,"strokewidth":0}},"width":922,"height":373,"resume":true,"useHandCursor":true,"id":"5gCn5GoV6vu"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6fxhnwrGf9u_-230459455","id":"01","linkId":"txt__default_6fxhnwrGf9u","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":282,"bottom":57,"pngfb":false,"pr":{"l":"Lib","i":105}}}],"shapemaskId":"","xPos":64,"yPos":40,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":380,"rotateYPos":30.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":760,"bottom":61,"altText":"SOAL EVALUASI","pngfb":false,"pr":{"l":"Lib","i":43}},"html5data":{"xPos":0,"yPos":0,"width":760,"height":61,"strokewidth":0}},"width":760,"height":61,"resume":true,"useHandCursor":true,"id":"6fxhnwrGf9u"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":109,"id":"01","url":"story_content/6ePCDt6601e_80_DX1088_DY1088.swf","type":"normal","altText":"Evaluasi no 1.png","width":1024,"height":768,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":256,"yPos":96,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":272,"rotateYPos":204,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":544,"bottom":408,"altText":"Evaluasi no 1.png","pngfb":false,"pr":{"l":"Lib","i":489}},"html5data":{"xPos":0,"yPos":0,"width":544,"height":408,"strokewidth":0}},"width":544,"height":408,"resume":true,"useHandCursor":true,"id":"5lMre54Sml2"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5y9TOepTa7f_CorrectReview","id":"01","linkId":"5y9TOepTa7f_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":554,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":491}}}],"shapemaskId":"","xPos":0,"yPos":728,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":512,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1024,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":490}},"html5data":{"xPos":1,"yPos":1,"width":1021,"height":37,"strokewidth":2}},"width":1024,"height":40,"resume":false,"useHandCursor":true,"id":"5y9TOepTa7f_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5y9TOepTa7f_IncorrectReview","id":"01","linkId":"5y9TOepTa7f_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":563,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":493}}}],"shapemaskId":"","xPos":0,"yPos":728,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":512,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1024,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":492}},"html5data":{"xPos":1,"yPos":1,"width":1021,"height":37,"strokewidth":2}},"width":1024,"height":40,"resume":false,"useHandCursor":true,"id":"5y9TOepTa7f_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');