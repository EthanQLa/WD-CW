//title of box1 in main seciton = chapter page
const newElementHeading = document.createElement('h3');
newElementHeading.textContent = 'Overall Progress';
const box1 = document.querySelector('.box1');
box1.appendChild(newElementHeading)

//first p of box1 in main section - chapter page
const newElementP = document.createElement('p');
newElementP.textContent = 'The UK Government’s new Net Zero Strategy,1 together with its manyaccompanying publications, lays out a broad set of plans and policies required toreduce the UK’s territorial emissions, including international aviation and shipping.'
const box2 = document.querySelector('.box1');
box2.appendChild(newElementP);

//creation of ul in main section - chapter page
const newElementUl = document.createElement('ul');
const box3 = document.querySelector(".box1");
box3.appendChild(newElementUl);
newElementUl.className = 'unorderedList'

//first li of ul in main section - chapter page
const newElementLi = document.createElement('li');
newElementLi.textContent = "Emissions. UK greenhouse gas emissions were 447 MtCO2e in 2021, includingthe UK’s share of international aviation and shipping emissions. This is 47%below 1990, a decrease of 10% on 2019 emissions but an increase of 4% on2020 emissions,which were low due to the effects of the COVID-19pandemic. UK consumption emissions, which include emissions embedded";
const unorderedList = document.querySelector(".unorderedList");
unorderedList.appendChild(newElementLi);

//second li of ul in main section - chapter page
const newElementLi2 = document.createElement("li");
newElementLi2.textContent = "The Net Zero Strategy. The UK Government has taken an important step withthe publication of the Net Zero Strategy, detailing plans of a pathway that,if achieved, would meet the Fourth, Fifth and Sixth Carbon Budgets and the2030 Nationally Determined Contribution (NDC). It has made severalcommitments, including – but not limited to – the following targets andambitions that are pivotal to achieving the majority of the emissionsreduction";
const unorderedList2 = document.querySelector(".unorderedList");
unorderedList.appendChild(newElementLi2);


