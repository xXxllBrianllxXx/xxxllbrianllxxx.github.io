"use strict";(self.webpackChunk_fuse_demo=self.webpackChunk_fuse_demo||[]).push([[2887],{42887:(H,u,l)=>{l.r(u),l.d(u,{FormsFieldsModule:()=>C,routes:()=>A});var q=l(63423),c=l(51095),m=l(42542),Z=l(58341),r=l(43220),U=l(1769),s=l(98295),d=l(76627),p=l(83166),_=l(33935),v=l(36063),f=l(67441),J=l(47214),Q=l(44466),e=l(37716),a=l(3679),S=l(38583),F=l(9572),b=l(72458);const A=[{path:"",component:(()=>{class o{constructor(i){this._formBuilder=i,this.formFieldHelpers=[""]}getFormFieldHelpersAsString(){return this.formFieldHelpers.join(" ")}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(a.qu))},o.\u0275cmp=e.Xpm({type:o,selectors:[["forms-fields"]],decls:448,vars:141,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex-auto","p-6","sm:p-10"],[1,"max-w-3xl"],[1,"prose","prose-sm","max-w-3xl"],[1,"flex","flex-col","mt-8","p-8","pb-4","bg-card","rounded-2xl","shadow","overflow-hidden"],[1,"flex","flex-col","gt-xs:flex-row"],[1,"flex-auto","gt-xs:pr-3",3,"ngClass"],["matInput",""],["matSuffix","",1,"icon-size-5",3,"svgIcon"],[1,"flex-auto","gt-xs:pl-3",3,"ngClass"],[1,"flex"],[1,"fuse-mat-textarea","flex-auto",3,"ngClass"],["matInput","","matTextareaAutosize","",3,"rows"],[1,"flex","flex-col","gt-md:flex-row"],[1,"flex-auto","gt-md:pr-3",3,"ngClass"],[1,"flex-auto","gt-md:pl-3",3,"ngClass"],[1,"flex-auto",3,"ngClass"],["matInput","","maxlength","5"],["postalCode",""],["align","end"],[1,"mt-12"],[1,"w-full",3,"ngClass"],["matInput","",3,"placeholder"],[1,"w-full",3,"ngClass","floatLabel"],["fuse-highlight","","lang","html"],["multiple","",3,"ngModel","ngModelChange"],[3,"value"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["mat-icon-button","","matPrefix",""],[1,"icon-size-5",3,"svgIcon"],["mat-icon-button","","matSuffix",""],["matPrefix",""],["matSuffix",""],["matInput","",1,"text-right"],["matPrefix","",3,"value"],["matSuffix","",3,"value"],["matInput","","matTextareaAutosize",""],["value","select1-1"],["value","select1-2"],["value","select1-3"],["value","select2-1"],["value","select2-2"],["value","select2-3"],["matNativeControl",""],["value",""],["chipList01",""],[3,"removable","selectable"],["matChipRemove","",1,"icon-size-5",3,"svgIcon"],[3,"placeholder","matChipInputFor"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],[1,"flex","flex-col","mt-8","p-8","bg-card","rounded-2xl","shadow","overflow-hidden"],["matInput","",1,"text-right",3,"placeholder"],["matInput","","matTextareaAutosize","",3,"placeholder"],[3,"placeholder"],["matNativeControl","",3,"placeholder"],["chipList02",""],["matInput","",3,"matDatepicker","placeholder"],["picker2",""]],template:function(i,t){if(1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div"),e.TgZ(5,"a",4),e._uU(6,"User Interface"),e.qZA(),e.qZA(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Forms"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"div",8),e.TgZ(12,"h2",9),e._uU(13," Fields "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div",10),e.TgZ(15,"div",11),e.TgZ(16,"div",12),e.TgZ(17,"p"),e._uU(18," By default, Fuse changes the default form field appearance to "),e.TgZ(19,"em"),e._uU(20,"fill"),e.qZA(),e._uU(21," and heavily modifies it to provide a more unique and consistent look. We "),e.TgZ(22,"strong"),e._uU(23,"DO NOT"),e.qZA(),e._uU(24," recommend using any other form field styles as they are not optimized for Fuse. "),e.qZA(),e.TgZ(25,"h2"),e._uU(26,"Appearance"),e.qZA(),e.TgZ(27,"p"),e._uU(28," Here's a very simple form layout to showcase the form fields. "),e.qZA(),e.qZA(),e.TgZ(29,"form",13),e.TgZ(30,"div",14),e.TgZ(31,"mat-form-field",15),e.TgZ(32,"mat-label"),e._uU(33,"First name"),e.qZA(),e._UZ(34,"input",16),e._UZ(35,"mat-icon",17),e.qZA(),e.TgZ(36,"mat-form-field",18),e.TgZ(37,"mat-label"),e._uU(38,"Last name"),e.qZA(),e._UZ(39,"input",16),e._UZ(40,"mat-icon",17),e.qZA(),e.qZA(),e.TgZ(41,"div",19),e.TgZ(42,"mat-form-field",20),e.TgZ(43,"mat-label"),e._uU(44,"Address"),e.qZA(),e._UZ(45,"textarea",21),e._UZ(46,"mat-icon",17),e.qZA(),e.qZA(),e.TgZ(47,"div",22),e.TgZ(48,"mat-form-field",23),e.TgZ(49,"mat-label"),e._uU(50,"City"),e.qZA(),e._UZ(51,"input",16),e._UZ(52,"mat-icon",17),e.qZA(),e.TgZ(53,"mat-form-field",24),e.TgZ(54,"mat-label"),e._uU(55,"State"),e.qZA(),e._UZ(56,"input",16),e._UZ(57,"mat-icon",17),e.qZA(),e.qZA(),e.TgZ(58,"div",19),e.TgZ(59,"mat-form-field",25),e.TgZ(60,"mat-label"),e._uU(61,"Postal code"),e.qZA(),e._UZ(62,"input",26,27),e.TgZ(64,"mat-hint",28),e._uU(65),e.qZA(),e._UZ(66,"mat-icon",17),e.qZA(),e.qZA(),e.qZA(),e.TgZ(67,"div",12),e.TgZ(68,"h2",29),e._uU(69,"Labels and Placeholders"),e.qZA(),e.TgZ(70,"p"),e._uU(71," Following form contains examples to showcase different label and placeholder styles. All fields in this example are standard text "),e.TgZ(72,"em"),e._uU(73,"inputs"),e.qZA(),e._uU(74," but everything you see here can also be applied to other input types such as "),e.TgZ(75,"em"),e._uU(76,"textarea"),e.qZA(),e._uU(77,", "),e.TgZ(78,"em"),e._uU(79,"select"),e.qZA(),e._uU(80,", "),e.TgZ(81,"em"),e._uU(82,"chips"),e.qZA(),e._uU(83," etc. "),e.qZA(),e.qZA(),e.TgZ(84,"form",13),e.TgZ(85,"mat-form-field",30),e._UZ(86,"input",31),e.qZA(),e.TgZ(87,"mat-form-field",30),e.TgZ(88,"mat-label"),e._uU(89,"Label"),e.qZA(),e._UZ(90,"input",16),e.qZA(),e.TgZ(91,"mat-form-field",32),e.TgZ(92,"mat-label"),e._uU(93,"Label and Placeholder"),e.qZA(),e._UZ(94,"input",31),e.qZA(),e.TgZ(95,"mat-form-field",30),e.TgZ(96,"mat-label"),e._uU(97,"Label and Placeholder on focus"),e.qZA(),e._UZ(98,"input",31),e.qZA(),e.qZA(),e.TgZ(99,"div",12),e.TgZ(100,"h2",29),e._uU(101,"Field variations"),e.qZA(),e.TgZ(102,"p"),e._uU(103," Following form contains examples to showcase form field variations. In addition to the heavy modifications, Fuse also provides set of helper classes to further modify the style of the form fields. "),e.qZA(),e.TgZ(104,"h3"),e._uU(105,"Required classes"),e.qZA(),e.TgZ(106,"ul"),e.TgZ(107,"li"),e.TgZ(108,"p"),e.TgZ(109,"code"),e._uU(110,".fuse-mat-textarea"),e.qZA(),e.qZA(),e.TgZ(111,"p"),e._uU(112," This helper class is required if you are using a textarea as your input. Since Angular Material doesn't differentiate a textarea from a normal input while using them with "),e.TgZ(113,"strong"),e._uU(114,"mat-form-field"),e.qZA(),e._uU(115,", this helper class is required for "),e.TgZ(116,"strong"),e._uU(117,"textarea"),e.qZA(),e._uU(118," inputs to look good and consistent. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(119,"textarea",33),e._uU(120,'                    <mat-form-field class="fuse-mat-textarea">\n                        <mat-label>Note</mat-label>\n                        <textarea matInput></textarea>\n                    </mat-form-field>\n                '),e.qZA(),e.TgZ(121,"h3"),e._uU(122,"Optional classes"),e.qZA(),e.TgZ(123,"ul"),e.TgZ(124,"li"),e.TgZ(125,"p"),e.TgZ(126,"code"),e._uU(127,".fuse-mat-dense"),e.qZA(),e.qZA(),e.TgZ(128,"p"),e._uU(129," Provides set of adjustments to make the fields denser. Dense fields are suitable for non-form usages and places where there isn't much space to work with such as small dialogs, menus, popovers and etc. "),e.qZA(),e.qZA(),e.TgZ(130,"li"),e.TgZ(131,"p"),e.TgZ(132,"code"),e._uU(133,".fuse-mat-rounded"),e.qZA(),e.qZA(),e.TgZ(134,"p"),e._uU(135,"Provides set of adjustments to make the fields look fully rounded."),e.qZA(),e.qZA(),e.TgZ(136,"li"),e.TgZ(137,"p"),e.TgZ(138,"code"),e._uU(139,".fuse-mat-no-subscript"),e.qZA(),e.qZA(),e.TgZ(140,"p"),e._uU(141," Provides set of adjustments to remove the bottom spacing where "),e.TgZ(142,"em"),e._uU(143,"hint"),e.qZA(),e._uU(144," and "),e.TgZ(145,"em"),e._uU(146,"error"),e.qZA(),e._uU(147," messages placed. This helper is particularly useful to align the field easily if you don't need to show error messages or hint text. For example a search bar in the toolbar uses this helper to fit the field to the toolbar without having an extra bottom spacing. "),e.qZA(),e.qZA(),e.TgZ(148,"li"),e.TgZ(149,"p"),e.TgZ(150,"code"),e._uU(151,".fuse-mat-emphasized-affix"),e.qZA(),e.qZA(),e.TgZ(152,"p"),e._uU(153," Provides set of adjustments to emphasize the field prefix and suffix by changing their background color and adding a border around them. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(154,"h3"),e._uU(155,"Usage"),e.qZA(),e.TgZ(156,"p"),e.TgZ(157,"code"),e._uU(158),e.qZA(),e.qZA(),e.TgZ(159,"p"),e.TgZ(160,"mat-button-toggle-group",34),e.NdJ("ngModelChange",function(g){return t.formFieldHelpers=g}),e.TgZ(161,"mat-button-toggle",35),e._uU(162,"Dense"),e.qZA(),e.TgZ(163,"mat-button-toggle",35),e._uU(164,"Rounded"),e.qZA(),e.TgZ(165,"mat-button-toggle",35),e._uU(166,"No subscript"),e.qZA(),e.TgZ(167,"mat-button-toggle",35),e._uU(168,"Emphasized affix"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(169,"h3"),e._uU(170,"With mat-label"),e.qZA(),e.qZA(),e.TgZ(171,"form",13),e.TgZ(172,"div",19),e.TgZ(173,"mat-form-field",25),e.TgZ(174,"mat-label"),e._uU(175,"Input"),e.qZA(),e._UZ(176,"input",31),e.TgZ(177,"mat-hint"),e._uU(178,"This is a hint text"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(179,"div",19),e.TgZ(180,"mat-form-field",25),e.TgZ(181,"mat-label"),e._uU(182,"Input with mat-icon as prefix & suffix"),e.qZA(),e._UZ(183,"input",16),e._UZ(184,"mat-icon",36),e._UZ(185,"mat-icon",17),e.qZA(),e.qZA(),e.TgZ(186,"div",19),e.TgZ(187,"mat-form-field",25),e.TgZ(188,"mat-label"),e._uU(189,"Input with mat-icon-button as prefix & suffix"),e.qZA(),e._UZ(190,"input",16),e.TgZ(191,"button",37),e._UZ(192,"mat-icon",38),e.qZA(),e.TgZ(193,"button",39),e._UZ(194,"mat-icon",38),e.qZA(),e.qZA(),e.qZA(),e.TgZ(195,"div",19),e.TgZ(196,"mat-form-field",25),e.TgZ(197,"mat-label"),e._uU(198,"Input with text prefix & suffix"),e.qZA(),e._UZ(199,"input",16),e.TgZ(200,"span",40),e._uU(201,"$"),e.qZA(),e.TgZ(202,"span",41),e._uU(203,".00"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(204,"div",19),e.TgZ(205,"mat-form-field",25),e.TgZ(206,"mat-label"),e._uU(207,"Right aligned input with text prefix & suffix"),e.qZA(),e._UZ(208,"input",42),e.TgZ(209,"span",40),e._uU(210,"$"),e.qZA(),e.TgZ(211,"span",41),e._uU(212,".00"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(213,"div",19),e.TgZ(214,"mat-form-field",25),e.TgZ(215,"mat-label"),e._uU(216,"Input with mat-select as prefix & suffix"),e.qZA(),e._UZ(217,"input",16),e.TgZ(218,"mat-select",43),e.TgZ(219,"mat-option",35),e._uU(220,"EU"),e.qZA(),e.TgZ(221,"mat-option",35),e._uU(222,"US"),e.qZA(),e.qZA(),e.TgZ(223,"mat-select",44),e.TgZ(224,"mat-option",35),e._uU(225,"kg"),e.qZA(),e.TgZ(226,"mat-option",35),e._uU(227,"gr"),e.qZA(),e.TgZ(228,"mat-option",35),e._uU(229,"oz"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(230,"div",19),e.TgZ(231,"mat-form-field",20),e.TgZ(232,"mat-label"),e._uU(233,"Textarea"),e.qZA(),e._UZ(234,"textarea",16),e.qZA(),e.qZA(),e.TgZ(235,"div",19),e.TgZ(236,"mat-form-field",20),e.TgZ(237,"mat-label"),e._uU(238,"Textarea with prefix & suffix"),e.qZA(),e._UZ(239,"textarea",16),e._UZ(240,"mat-icon",36),e._UZ(241,"mat-icon",17),e.qZA(),e.qZA(),e.TgZ(242,"div",19),e.TgZ(243,"mat-form-field",20),e.TgZ(244,"mat-label"),e._uU(245,"Textarea with autosize"),e.qZA(),e._UZ(246,"textarea",45),e.qZA(),e.qZA(),e.TgZ(247,"div",19),e.TgZ(248,"mat-form-field",20),e.TgZ(249,"mat-label"),e._uU(250,"Textarea with autosize, prefix & suffix"),e.qZA(),e._UZ(251,"textarea",45),e._UZ(252,"mat-icon",36),e._UZ(253,"mat-icon",17),e.qZA(),e.qZA(),e.TgZ(254,"div",14),e.TgZ(255,"mat-form-field",15),e.TgZ(256,"mat-label"),e._uU(257,"Select with prefix"),e.qZA(),e.TgZ(258,"mat-select"),e.TgZ(259,"mat-option",46),e._uU(260,"Select 1-1 Select 1-1 Select 1-1 Select 1-1 Select 1-1 Select 1-1 Select 1-1"),e.qZA(),e.TgZ(261,"mat-option",47),e._uU(262,"Select 1-2"),e.qZA(),e.TgZ(263,"mat-option",48),e._uU(264,"Select 1-3"),e.qZA(),e.qZA(),e._UZ(265,"mat-icon",36),e.qZA(),e.TgZ(266,"mat-form-field",18),e.TgZ(267,"mat-label"),e._uU(268,"Select with suffix"),e.qZA(),e.TgZ(269,"mat-select"),e.TgZ(270,"mat-option",49),e._uU(271,"Select 2-1 Select 2-1 Select 2-1 Select 2-1 Select 2-1 Select 2-1 Select 2-1"),e.qZA(),e.TgZ(272,"mat-option",50),e._uU(273,"Select 2-2"),e.qZA(),e.TgZ(274,"mat-option",51),e._uU(275,"Select 2-3"),e.qZA(),e.qZA(),e._UZ(276,"mat-icon",17),e.qZA(),e.qZA(),e.TgZ(277,"div",14),e.TgZ(278,"mat-form-field",15),e.TgZ(279,"mat-label"),e._uU(280,"Native select with prefix"),e.qZA(),e.TgZ(281,"select",52),e._UZ(282,"option",53),e.TgZ(283,"option",46),e._uU(284,"Select 1-1 Select 1-1 Select 1-1 Select 1-1 Select 1-1 Select 1-1 Select 1-1"),e.qZA(),e.TgZ(285,"option",47),e._uU(286,"Select 1-2"),e.qZA(),e.TgZ(287,"option",48),e._uU(288,"Select 1-3"),e.qZA(),e.qZA(),e._UZ(289,"mat-icon",36),e.qZA(),e.TgZ(290,"mat-form-field",18),e.TgZ(291,"mat-label"),e._uU(292,"Native select with suffix"),e.qZA(),e.TgZ(293,"select",52),e._UZ(294,"option",53),e.TgZ(295,"option",49),e._uU(296,"Select 2-1 Select 2-1 Select 2-1 Select 2-1 Select 2-1 Select 2-1 Select 2-1"),e.qZA(),e.TgZ(297,"option",50),e._uU(298,"Select 2-2"),e.qZA(),e.TgZ(299,"option",51),e._uU(300,"Select 2-3"),e.qZA(),e.qZA(),e._UZ(301,"mat-icon",17),e.qZA(),e.qZA(),e.TgZ(302,"div",19),e.TgZ(303,"mat-form-field",25),e.TgZ(304,"mat-chip-list",null,54),e.TgZ(306,"mat-chip",55),e._uU(307," Lemon "),e._UZ(308,"mat-icon",56),e.qZA(),e.TgZ(309,"mat-chip",55),e._uU(310," Lime "),e._UZ(311,"mat-icon",56),e.qZA(),e.TgZ(312,"mat-chip",55),e._uU(313," Apple "),e._UZ(314,"mat-icon",56),e.qZA(),e._UZ(315,"input",57),e.qZA(),e.qZA(),e.qZA(),e.TgZ(316,"div",19),e.TgZ(317,"mat-form-field",25),e.TgZ(318,"mat-label"),e._uU(319,"Choose a date"),e.qZA(),e._UZ(320,"input",58),e._UZ(321,"mat-datepicker-toggle",59),e._UZ(322,"mat-datepicker",null,60),e.qZA(),e.qZA(),e.qZA(),e.TgZ(324,"div",12),e.TgZ(325,"h3",29),e._uU(326,"Without mat-label"),e.qZA(),e.qZA(),e.TgZ(327,"form",61),e.TgZ(328,"div",19),e.TgZ(329,"mat-form-field",25),e._UZ(330,"input",31),e.qZA(),e.qZA(),e.TgZ(331,"div",19),e.TgZ(332,"mat-form-field",25),e._UZ(333,"input",31),e._UZ(334,"mat-icon",36),e._UZ(335,"mat-icon",17),e.qZA(),e.qZA(),e.TgZ(336,"div",19),e.TgZ(337,"mat-form-field",25),e._UZ(338,"input",31),e.TgZ(339,"button",37),e._UZ(340,"mat-icon",38),e.qZA(),e.TgZ(341,"button",39),e._UZ(342,"mat-icon",38),e.qZA(),e.qZA(),e.qZA(),e.TgZ(343,"div",19),e.TgZ(344,"mat-form-field",25),e._UZ(345,"input",31),e.TgZ(346,"span",40),e._uU(347,"$"),e.qZA(),e.TgZ(348,"span",41),e._uU(349,".00"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(350,"div",19),e.TgZ(351,"mat-form-field",25),e._UZ(352,"input",62),e.TgZ(353,"span",40),e._uU(354,"$"),e.qZA(),e.TgZ(355,"span",41),e._uU(356,".00"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(357,"div",19),e.TgZ(358,"mat-form-field",25),e._UZ(359,"input",31),e.TgZ(360,"mat-select",43),e.TgZ(361,"mat-option",35),e._uU(362,"EU"),e.qZA(),e.TgZ(363,"mat-option",35),e._uU(364,"US"),e.qZA(),e.qZA(),e.TgZ(365,"mat-select",44),e.TgZ(366,"mat-option",35),e._uU(367,"kg"),e.qZA(),e.TgZ(368,"mat-option",35),e._uU(369,"gr"),e.qZA(),e.TgZ(370,"mat-option",35),e._uU(371,"oz"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(372,"div",19),e.TgZ(373,"mat-form-field",20),e._UZ(374,"textarea",31),e.qZA(),e.qZA(),e.TgZ(375,"div",19),e.TgZ(376,"mat-form-field",20),e._UZ(377,"textarea",31),e._UZ(378,"mat-icon",36),e._UZ(379,"mat-icon",17),e.qZA(),e.qZA(),e.TgZ(380,"div",19),e.TgZ(381,"mat-form-field",20),e._UZ(382,"textarea",63),e.qZA(),e.qZA(),e.TgZ(383,"div",19),e.TgZ(384,"mat-form-field",20),e._UZ(385,"textarea",63),e._UZ(386,"mat-icon",36),e._UZ(387,"mat-icon",17),e.qZA(),e.qZA(),e.TgZ(388,"div",14),e.TgZ(389,"mat-form-field",15),e.TgZ(390,"mat-select",64),e.TgZ(391,"mat-option",46),e._uU(392,"Select 1-1 Select 1-1 Select 1-1 Select 1-1 Select 1-1 Select 1-1 Select 1-1"),e.qZA(),e.TgZ(393,"mat-option",47),e._uU(394,"Select 1-2"),e.qZA(),e.TgZ(395,"mat-option",48),e._uU(396,"Select 1-3"),e.qZA(),e.qZA(),e._UZ(397,"mat-icon",36),e.qZA(),e.TgZ(398,"mat-form-field",18),e.TgZ(399,"mat-select",64),e.TgZ(400,"mat-option",49),e._uU(401,"Select 2-1 Select 2-1 Select 2-1 Select 2-1 Select 2-1 Select 2-1 Select 2-1"),e.qZA(),e.TgZ(402,"mat-option",50),e._uU(403,"Select 2-2"),e.qZA(),e.TgZ(404,"mat-option",51),e._uU(405,"Select 2-3"),e.qZA(),e.qZA(),e._UZ(406,"mat-icon",17),e.qZA(),e.qZA(),e.TgZ(407,"div",14),e.TgZ(408,"mat-form-field",15),e.TgZ(409,"select",65),e._UZ(410,"option",53),e.TgZ(411,"option",46),e._uU(412,"Select 1-1 Select 1-1 Select 1-1 Select 1-1 Select 1-1 Select 1-1 Select 1-1"),e.qZA(),e.TgZ(413,"option",47),e._uU(414,"Select 1-2"),e.qZA(),e.TgZ(415,"option",48),e._uU(416,"Select 1-3"),e.qZA(),e.qZA(),e._UZ(417,"mat-icon",36),e.qZA(),e.TgZ(418,"mat-form-field",18),e.TgZ(419,"select",65),e._UZ(420,"option",53),e.TgZ(421,"option",49),e._uU(422,"Select 2-1 Select 2-1 Select 2-1 Select 2-1 Select 2-1 Select 2-1 Select 2-1"),e.qZA(),e.TgZ(423,"option",50),e._uU(424,"Select 2-2"),e.qZA(),e.TgZ(425,"option",51),e._uU(426,"Select 2-3"),e.qZA(),e.qZA(),e._UZ(427,"mat-icon",17),e.qZA(),e.qZA(),e.TgZ(428,"div",19),e.TgZ(429,"mat-form-field",25),e.TgZ(430,"mat-chip-list",null,66),e.TgZ(432,"mat-chip",55),e._uU(433," Lemon "),e._UZ(434,"mat-icon",56),e.qZA(),e.TgZ(435,"mat-chip",55),e._uU(436," Lime "),e._UZ(437,"mat-icon",56),e.qZA(),e.TgZ(438,"mat-chip",55),e._uU(439," Apple "),e._UZ(440,"mat-icon",56),e.qZA(),e._UZ(441,"input",57),e.qZA(),e.qZA(),e.qZA(),e.TgZ(442,"div",19),e.TgZ(443,"mat-form-field",25),e._UZ(444,"input",67),e._UZ(445,"mat-datepicker-toggle",59),e._UZ(446,"mat-datepicker",null,68),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i){const T=e.MAs(63),g=e.MAs(305),h=e.MAs(323),I=e.MAs(431),x=e.MAs(447);e.xp6(8),e.Q6J("svgIcon","heroicons_solid:chevron-right"),e.xp6(23),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:user-circle"),e.xp6(1),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:user-circle"),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(3),e.Q6J("rows",3),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:location-marker"),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:location-marker"),e.xp6(1),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:location-marker"),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(6),e.hij("",T.value.length," / 5"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:mail"),e.xp6(19),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(1),e.Q6J("placeholder","Placeholder only"),e.xp6(1),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(4),e.Q6J("ngClass",t.formFieldHelpers)("floatLabel","always"),e.xp6(3),e.Q6J("placeholder","Placeholder"),e.xp6(1),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(3),e.Q6J("placeholder","Placeholder"),e.xp6(60),e.hij('<mat-form-field class="',t.getFormFieldHelpersAsString(),'">...<mat-form-field>'),e.xp6(2),e.Q6J("ngModel",t.formFieldHelpers),e.xp6(1),e.Q6J("value","fuse-mat-dense"),e.xp6(2),e.Q6J("value","fuse-mat-rounded"),e.xp6(2),e.Q6J("value","fuse-mat-no-subscript"),e.xp6(2),e.Q6J("value","fuse-mat-emphasized-affix"),e.xp6(6),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(3),e.Q6J("placeholder","This is a placeholder"),e.xp6(4),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:user-circle"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:user-circle"),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(5),e.Q6J("svgIcon","heroicons_solid:badge-check"),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:eye-off"),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(9),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(9),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(4),e.Q6J("value","EU"),e.xp6(1),e.Q6J("value","EU"),e.xp6(2),e.Q6J("value","US"),e.xp6(2),e.Q6J("value","kg"),e.xp6(1),e.Q6J("value","kg"),e.xp6(2),e.Q6J("value","gr"),e.xp6(2),e.Q6J("value","oz"),e.xp6(3),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(5),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:user-circle"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:user-circle"),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(5),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:user-circle"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:user-circle"),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(10),e.Q6J("svgIcon","heroicons_solid:location-marker"),e.xp6(1),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(10),e.Q6J("svgIcon","heroicons_solid:translate"),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(11),e.Q6J("svgIcon","heroicons_solid:location-marker"),e.xp6(1),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(11),e.Q6J("svgIcon","heroicons_solid:translate"),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(3),e.Q6J("removable",!0)("selectable",!0),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:minus-circle"),e.xp6(1),e.Q6J("removable",!0)("selectable",!0),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:minus-circle"),e.xp6(1),e.Q6J("removable",!0)("selectable",!0),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:minus-circle"),e.xp6(1),e.Q6J("placeholder","New fruit...")("matChipInputFor",g),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(3),e.Q6J("matDatepicker",h),e.xp6(1),e.Q6J("for",h),e.xp6(8),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(1),e.Q6J("placeholder","Input"),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(1),e.Q6J("placeholder","Input with mat-icon as prefix & suffix"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:user-circle"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:user-circle"),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(1),e.Q6J("placeholder","Input with mat-icon-button as prefix & suffix"),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:badge-check"),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:eye-off"),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(1),e.Q6J("placeholder","Input with text prefix Suffix"),e.xp6(6),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(1),e.Q6J("placeholder","Right aligned input with text prefix & suffix"),e.xp6(6),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(1),e.Q6J("placeholder","Input with mat-select as prefix & suffix"),e.xp6(1),e.Q6J("value","EU"),e.xp6(1),e.Q6J("value","EU"),e.xp6(2),e.Q6J("value","US"),e.xp6(2),e.Q6J("value","kg"),e.xp6(1),e.Q6J("value","kg"),e.xp6(2),e.Q6J("value","gr"),e.xp6(2),e.Q6J("value","oz"),e.xp6(3),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(1),e.Q6J("placeholder","Textarea"),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(1),e.Q6J("placeholder","Textarea with prefix & suffix"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:user-circle"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:user-circle"),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(1),e.Q6J("placeholder","Textarea with autosize"),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(1),e.Q6J("placeholder","Textarea with autosize, prefix & suffix"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:user-circle"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:user-circle"),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(1),e.Q6J("placeholder","Select with prefix"),e.xp6(7),e.Q6J("svgIcon","heroicons_solid:location-marker"),e.xp6(1),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(1),e.Q6J("placeholder","Select with suffix"),e.xp6(7),e.Q6J("svgIcon","heroicons_solid:translate"),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(1),e.Q6J("placeholder","Native select with prefix"),e.xp6(8),e.Q6J("svgIcon","heroicons_solid:location-marker"),e.xp6(1),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(1),e.Q6J("placeholder","Native select with suffix"),e.xp6(8),e.Q6J("svgIcon","heroicons_solid:translate"),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(3),e.Q6J("removable",!0)("selectable",!0),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:minus-circle"),e.xp6(1),e.Q6J("removable",!0)("selectable",!0),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:minus-circle"),e.xp6(1),e.Q6J("removable",!0)("selectable",!0),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:minus-circle"),e.xp6(1),e.Q6J("placeholder","New fruit...")("matChipInputFor",I),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(1),e.Q6J("matDatepicker",x)("placeholder","Choose a date"),e.xp6(1),e.Q6J("for",x)}},directives:[d.Hw,a._Y,a.JL,a.F,s.KE,S.mk,s.hX,p.Nt,s.R9,p.D7,s.bx,F.L,m.A9,a.JJ,a.On,m.Yi,s.qo,c.lW,f.gD,b.ey,a.YN,a.Kr,Z.qn,Z.HS,Z.qH,Z.oH,r.hl,r.nW,r.Mq],encapsulation:2}),o})()}];let C=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[q.Bz.forChild(A),c.ot,m.vV,Z.Hi,r.FA,U.t,s.lN,d.Ps,p.c,_.Tx,v.Yd,f.LD,J.$A,Q.m]]}),o})()}}]);