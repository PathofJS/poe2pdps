
document.addEventListener("DOMContentLoaded", function() {

const wepName = document.querySelector('.wepName');

const wepClass = document.getElementById('wepClass');
const baseImg = document.getElementById("baseImg");
const imagePathPrefix = "img/poe2/art/"; // Correct path!

// Weapon type to image name mapping
const weaponImageNameMap = {
  "Crossbow": "2HCrossbow0",
  "Bow": "Bow0",
  "Quarterstaff": "Warstaff0",
  "Two Hand Mace": "2HMace0",
  "One Hand Mace": "1HMace0"
};

function preloadImages(imageNameBase, artValue) {
  const imagePath = `${imagePathPrefix}${imageNameBase}${artValue}.png`;
  const img = new Image();
  img.src = imagePath;
}



const inpBaseMin = document.getElementById("inpBaseMin");
const inpBaseMax = document.getElementById("inpBaseMax");

//Flat Phys: Select and Input vars
const selFlat = document.getElementById("selFlat");
const inpFlatMin = document.getElementById("inpFlatMin");
const inpFlatMax = document.getElementById("inpFlatMax");

const displayTierValues = document.getElementById("displayTierValues");

//Inc Phys: Select and Input vars
const selPhys = document.getElementById("selPhys");
const inpPhys = document.getElementById("inpPhys");

//Inc Hybrid: Select and Input vars
const selHyb = document.getElementById("selHyb");
const inpHyb = document.getElementById("inpHyb");

//Inc Speed: Select and Input vars
const selSpeed = document.getElementById("selSpeed");
const inpSpeed = document.getElementById("inpSpeed");

//Inc Speed: Select and Input vars
const selCrit = document.getElementById("selCrit");
const inpCrit = document.getElementById("inpCrit");

const totalMin = document.getElementById("totalMin");
const totalMax = document.getElementById("totalMax");
const wepAps = document.getElementById("wepAps");

//Quality Input vars
const inpQual = document.getElementById("inpQual");
const wepQual = document.getElementById("wepQual");

const basePdps = document.getElementById("basePdps");


            

//ARRAYS


const Bow = {
ZealotBow2: {type: 2, min: 56, max: 84, crit: 5.00, aps: 1.20, art: 8},
CompositeBow2: {type: 2, min: 49, max: 82, crit: 5.00, aps: 1.20, art: 5},
WardenBow2: {type: 2, min: 53, max: 80, crit: 5.00, aps: 1.15, art: 3},
Shortbow2: {type: 2, min: 41, max: 76, crit: 5.00, aps: 1.25, art: 2},
ZealotBow1: {type: 1, min: 46, max: 69, crit: 5.00, aps: 1.20, art: 8},
CompositeBow1: {type: 1, min: 36, max: 61, crit: 5.00, aps: 1.20, art: 5},
WardenBow1: {type: 1, min: 35, max: 53, crit: 5.00, aps: 1.15, art: 3},
DualstringBow1: {type: 1, min: 29, max: 54, crit: 5.00, aps: 1.20, art: 6},
ZealotBow0: {type: 0, min: 31, max: 47, crit: 5.00, aps: 1.20, art: 8},
CompositeBow0: {type: 0, min: 19, max: 31, crit: 5.00, aps: 1.20, art: 5},
DualstringBow0: {type: 0, min: 16, max: 31, crit: 5.00, aps: 1.10, art: 6},
RecurveBow: {type: 0, min: 15, max: 31, crit: 5.00, aps: 1.10, art: 4},
WardenBow0: {type: 0, min: 12, max: 18, crit: 5.00, aps: 1.15, art: 3},
Shortbow0: {type: 0, min: 7, max: 14, crit: 5.00, aps: 1.25, art: 2},
CrudeBow: {type: 0, min: 6, max: 9, crit: 5.00, aps: 1.20, art: 1}
};

const Crossbow = {
ForlornCrossbow2: { type: 2, min: 28, max: 112, crit: 5.00, aps: 1.60, art: 8, rld: 0.80 },
VarnishedCrossbow2: { type: 2, min: 26, max: 105, crit: 5.00, aps: 1.60, art: 4, rld: 0.80 },
SturdyCrossbow2: { type: 2, min: 25, max: 102, crit: 5.00, aps: 1.55, art: 3, rld: 0.75 },
TenseCrossbow2: { type: 2, min: 26, max: 106, crit: 5.00, aps: 1.60, art: 2, rld: 0.85 },
BombardCrossbow1: { type: 1, min: 19, max: 77, crit: 5.00, aps: 1.65, art: 7, rld: 0.75 },
VarnishedCrossbow1: { type: 1, min: 19, max: 78, crit: 5.00, aps: 1.60, art: 4, rld: 0.80 },
SturdyCrossbow1: { type: 1, min: 19, max: 76, crit: 5.00, aps: 1.55, art: 3, rld: 0.75 },
TenseCrossbow1: { type: 1, min: 17, max: 66, crit: 5.00, aps: 1.60, art: 2, rld: 0.85 },
BombardCrossbow0: { type: 0, min: 12, max: 47, crit: 5.00, aps: 1.65, art: 7, rld: 0.75 },
AlloyCrossbow0: { type: 0, min: 11, max: 42, crit: 5.00, aps: 1.70, art: 6, rld: 0.70 },
VarnishedCrossbow0: { type: 0, min: 10, max: 30, crit: 5.00, aps: 1.60, art: 4, rld: 0.80 },
DyadCrossbow0: { type: 0, min: 7, max: 30, crit: 5.00, aps: 1.60, art: 5, rld: 1.10 },
SturdyCrossbow0: { type: 0, min: 9, max: 22, crit: 5.00, aps: 1.55, art: 3, rld: 0.75 },
TenseCrossbow0: { type: 0, min: 7, max: 13, crit: 5.00, aps: 1.60, art: 2, rld: 0.85 },
MakeshiftCrossbow0: { type: 0, min: 6, max: 10, crit: 5.00, aps: 1.60, art: 1, rld: 0.80 }
};

const OneHandMace = {
ConstructHammer2: { type: 2, min: 60, max: 73, crit: 5.00, aps: 1.40, art: 8 },
PlatedMace2: { type: 2, min: 43, max: 89, crit: 5.00, aps: 1.40, art: 6 },
SlimMace2: { type: 2, min: 45, max: 67, crit: 5.00, aps: 1.55, art: 3 },
Warpick2: { type: 2, min: 48, max: 64, crit: 8.00, aps: 1.45, art: 5 },
BrigandMace1: { type: 1, min: 45, max: 61, crit: 5.00, aps: 1.45, art: 7 },
ConstructHammer1: { type: 1, min: 49, max: 60, crit: 5.00, aps: 1.40, art: 8 },
PlatedMace1: { type: 1, min: 34, max: 70, crit: 5.00, aps: 1.40, art: 6 },
SlimMace1: { type: 1, min: 33, max: 50, crit: 5.00, aps: 1.55, art: 3 },
SmithingHammer1: { type: 1, min: 30, max: 50, crit: 5.00, aps: 1.45, art: 2 },
Warpick1: { type: 1, min: 34, max: 46, crit: 8.00, aps: 1.45, art: 5 },
ConstructHammer0: { type: 0, min: 31, max: 38, crit: 5.00, aps: 1.40, art: 8 },
BrigandMace0: { type: 0, min: 28, max: 38, crit: 5.00, aps: 1.45, art: 7 },
PlatedMace0: { type: 0, min: 18, max: 38, crit: 5.00, aps: 1.40, art: 6 },
SmithingHammer0: { type: 0, min: 19, max: 32, crit: 5.00, aps: 1.45, art: 2 },
Warpick0: { type: 0, min: 18, max: 24, crit: 8.00, aps: 1.45, art: 5 },
SpikedClub: { type: 0, min: 15, max: 24, crit: 5.00, aps: 1.45, art: 4 },
SlimMace0: { type: 0, min: 11, max: 17, crit: 5.00, aps: 1.55, art: 3 },
WoodenClub: { type: 0, min: 6, max: 10, crit: 5.00, aps: 1.45, art: 1 },
SmithingHammer2: { type: 0, min: 4, max: 7, crit: 5.00, aps: 1.45, art: 2 }
};

const Quarterstaff = {
GothicQuarterstaff2: { type: 2, min: 55, max: 92, crit: 11.50, aps: 1.40, art: 3 },
SlicingQuarterstaff1: { type: 1, min: 45, max: 94, crit: 10.00, aps: 1.40, art: 7 },
GothicQuarterstaff1: { type: 1, min: 43, max: 72, crit: 11.50, aps: 1.40, art: 3 },
LongQuarterstaff1: { type: 1, min: 35, max: 72, crit: 10.00, aps: 1.40, art: 2 },
GothicQuarterstaff0: { type: 0, min: 16, max: 26, crit: 11.50, aps: 1.40, art: 3 },
LongQuarterstaff0: { type: 0, min: 9, max: 18, crit: 10.00, aps: 1.40, art: 2 },
WrappedQuarterstaff: { type: 0, min: 7, max: 12, crit: 10.00, aps: 1.40, art: 1 },
CresentQuarterstaff: { type: 0, min: 19, max: 39, crit: 10.00, aps: 1.50, art: 5 },
CracklingQuarterstaff: { type: 0, min: 0, max: 0, crit: 10.00, aps: 1.40, art: 4 },
BarrierQuarterstaff: { type: 0, min: 33, max: 55, crit: 10.00, aps: 1.40, art: 8 },
SteelpointQuarterstaff: { type: 0, min: 28, max: 51, crit: 10.00, aps: 1.40, art: 6 }
};

const TwoHandMace = {
OakGreathammer2: { type: 1, min: 94, max: 174, crit: 5.00, aps: 1.05, art: 2 },
ForgeMaul2: { type: 2, min: 112, max: 151, crit: 5.00, aps: 1.05, art: 3 },
LeadenGreathammer1: { type: 1, min: 94, max: 127, crit: 5.00, aps: 1.10, art: 7 },
CrumblingMaul1: { type: 1, min: 93, max: 114, crit: 5.00, aps: 1.10, art: 8 },
TempleMaul1: { type: 1, min: 60, max: 125, crit: 5.00, aps: 1.20, art: 6 },
ForgeMaul1: { type: 1, min: 84, max: 113, crit: 5.00, aps: 1.05, art: 3 },
OakGreathammer1: { type: 1, min: 59, max: 109, crit: 5.00, aps: 1.05, art: 2 },
CultistGreathammer1: { type: 1, min: 62, max: 83, crit: 5.00, aps: 1.05, art: 5 },
CrumblingMaul0: { type: 0, min: 62, max: 75, crit: 5.00, aps: 1.10, art: 8 },
LeadenGreathammer0: { type: 0, min: 58, max: 78, crit: 5.00, aps: 1.10, art: 7 },
TempleMaul0: { type: 0, min: 35, max: 72, crit: 5.00, aps: 1.20, art: 6 },
StuddedGreatclub: { type: 0, min: 32, max: 45, crit: 5.00, aps: 1.10, art: 4 },
CultistGreathammer0: { type: 0, min: 32, max: 43, crit: 5.00, aps: 1.05, art: 5 },
ForgeMaul0: { type: 0, min: 29, max: 39, crit: 5.00, aps: 1.05, art: 3 },
FelledGreatclub: { type: 0, min: 13, max: 18, crit: 5.00, aps: 1.10, art: 1 },
OakGreathammer0: { type: 0, min: 14, max: 26, crit: 5.00, aps: 1.05, art: 2 }
};

const weaponData = {
  "Bow": { data: Bow, h: "1" },
  "Crossbow": { data: Crossbow, h: "2" },
  "One Hand Mace": { data: OneHandMace, h: "1" },
  "Quarterstaff": { data: Quarterstaff, h: "2" },
  "Two Hand Mace": { data: TwoHandMace, h: "2" }
};
          
const tiersFlat = {
9: { min1: 26, max1: 39, min2: 44, max2: 66 },
8: { min1: 21, max1: 31, min2: 36, max2: 53 },
7: { min1: 16, max1: 24, min2: 28, max2: 42 },
6: { min1: 13, max1: 20, min2: 23, max2: 35 },
5: { min1: 10, max1: 15, min2: 18, max2: 26 },
4: { min1: 8, max1: 12, min2: 14, max2: 20 },
3: { min1: 6, max1: 9, min2: 11, max2: 16 },
2: { min1: 4, max1: 6, min2: 7, max2: 11 },
1: { min1: 1, max1: 2, min2: 4, max2: 5 },
0: { min1: 0, max1: 0, min2: 0, max2: 0 }
};

const tiersFlat2h = {
9: { min1: 37, max1: 55, min2: 63, max2: 94 },
8: { min1: 29, max1: 44, min2: 50, max2: 75 },
7: { min1: 23, max1: 35, min2: 39, max2: 59 },
6: { min1: 19, max1: 29, min2: 33, max2: 49 },
5: { min1: 14, max1: 21, min2: 25, max2: 37 },
4: { min1: 11, max1: 17, min2: 20, max2: 23 },
3: { min1: 8, max1: 12, min2: 15, max2: 22 },
2: { min1: 5, max1: 8, min2: 10, max2: 15 },
1: { min1: 2, max1: 3, min2: 5, max2: 7 },
0: { min1: 0, max1: 0, min2: 0, max2: 0 }
};

const tiersPhys = {
8: { min: 170, max: 179 },
7: { min: 155, max: 169 },
6: { min: 135, max: 154 },
5: { min: 110, max: 134 },
4: { min: 85, max: 109 },
3: { min: 65, max: 84 },
2: { min: 50, max: 64 },
1: { min: 40, max: 49 },
0: { min: 0, max: 0}
};
    
const tiersHyb = {
  8: { min: 75, max: 79 },
  7: { min: 65, max: 74 },
6: { min: 55, max: 64 },
5: { min: 45, max: 54 },
4: { min: 35, max: 44 },
3: { min: 25, max: 34 },
2: { min: 20, max: 24 },
1: { min: 15, max: 19 },
0: { min: 0, max: 0}
};
    
const tiersSpeed = {   
1: { min: 5, max: 7 },
2: { min: 8, max: 10 },
3: { min: 11, max: 13 },
4: { min: 14, max: 16 },
5: { min: 17, max: 19 },
6: { min: 20, max: 22 },
7: { min: 23, max: 25 },
8: { min: 26, max: 28 },
0: { min: 0, max: 0 } 
};

const tiersCrit = {
1: { min: 1.01, max: 1.5 },
2: { min: 1.51, max: 2.1 },
3: { min: 2.11, max: 2.7 },
4: { min: 3.11, max: 3.8 },
5: { min: 3.81, max: 4.4 },
6: { min: 4.41, max: 5 },
0: { min: 0, max: 0 }
};

const tiersEnch = [
  { phys1: 10 },
  { phys2: 20 }
  ]; 


/* 

const tiersEnch = [
{ physMods: 6 },
{ physMods: 8 },
{ physMods: 10 },
{ physMods: 15 },
{ speedMods: 6 },
{ speedMods: 8 },
{ speedMods: 10 },
{ speedMods: 12 },
{ speedMods: 15 },
{ physMods: 6, speedMods: 6 },
{ physMods: 6, critMods: 6 }
]; 

*/



          // Populate selWep
    for (const weaponType in weaponData) {
      const option = document.createElement("option");
      option.value = weaponType;
      option.text = weaponType;
      selWep.appendChild(option);
  }

  function formatWeaponName(name) {
    let formattedName = name.replace(/([A-Z])/g, ' $1').trim(); // Add spaces before capital letters
    let prefix = "";

    if (name.endsWith("1")) {
        prefix = "Advanced ";
    } else if (name.endsWith("2")) {
        prefix = "Expert ";
    }

    formattedName = formattedName.replace(/\d+$/, ''); // Remove trailing numbers
    return prefix + formattedName.charAt(0).toUpperCase() + formattedName.slice(1); // Capitalize and add prefix
}

  function populateSelBase(weaponDataToUse) {
      selBase.innerHTML = "";
      if (weaponDataToUse) {
          for (const weaponName in weaponDataToUse) {
              const formattedName = formatWeaponName(weaponName);
              const option = document.createElement("option");
              option.value = weaponName;
              option.text = formattedName;
              selBase.appendChild(option);
          }
      } else {
          const option = document.createElement("option");
          option.text = "No weapons available";
          selBase.appendChild(option);
      }
  }

  function handleWeaponSelection() {
    const selectedWeaponType = selWep.value;
    // Access the 'data' property
    baseData = weaponData[selectedWeaponType].data;
    populateSelBase(baseData);
    
    // Check if the weapon is 1H or 2H
    const isTwoHanded = weaponData[selectedWeaponType].h === "2";
    
    // Populate selFlat with the correct tier data
    populateSelFlat(isTwoHanded);
    updateInpFlatTier(selFlat.value);
    updateWepClass(selectedWeaponType);
    handleBaseSelection(); // Call after baseData is set
}

function populateSelFlat(isTwoHanded) {
  selFlat.innerHTML = ""; // Clear existing options
  const tiers = isTwoHanded ? tiersFlat2h : tiersFlat;
  
  // Add R0 as the first option
  const optionR0 = document.createElement("option");
  optionR0.value = "0";
  optionR0.text = "Added Physical Damage";
  selFlat.appendChild(optionR0);
  
  // Populate selFlat with tiers from 9 to 1
  for (let tier = 9; tier >= 1; tier--) {
      const option = document.createElement("option");
      option.value = tier;
      option.text = `R${tier}`;
      selFlat.appendChild(option);
  }
  
  // Set R0 as the initial selected option
  selFlat.value = "0";
}

function updateWepClass(weaponType) {
  wepClass.innerText = weaponType;
}

selWep.addEventListener("change", () => {
  handleWeaponSelection();

});

  selWep.selectedIndex = 0; // Select first weapon on load
  handleWeaponSelection(); // Call on page load

  function handleBaseSelection() {
    const selectedBase = selBase.value;
    const selectedWeaponType = selWep.value;
    const imageNameBase = weaponImageNameMap[selectedWeaponType];

    if (baseData && baseData[selectedBase] && imageNameBase) {
        const artValue = baseData[selectedBase].art;

        preloadImages(imageNameBase, artValue);
        baseImg.src = `${imagePathPrefix}${imageNameBase}${artValue}.png`; // Correct!
        wepName.textContent = selBase.options[selBase.selectedIndex].text;
        updateInpBase(selectedBase);
        updateTotalValues();
        updatePdps();
    } else {
        console.error("Invalid base selected, weapon type mapping not found, or baseData not available.");
        baseImg.src = 'img/stone.png';
    }
}

  selBase.addEventListener("change", handleBaseSelection);

  function updateInpBase(baseName) {
      if (baseData && baseData[baseName]) {
          inpBaseMin.value = baseData[baseName].min;
          inpBaseMax.value = baseData[baseName].max;
          inpBaseAps.value = baseData[baseName].aps;
      } else {
          inpBaseMin.value = "";
          inpBaseMax.value = "";
          inpBaseAps.value = "";
          console.error("Invalid base selected:", baseName);
      }
  }
            
           // EventListeners for Changes in Select elements
  
           selBase.addEventListener("change", () => {
    const selectedBase = parseInt(selBase.value);
    updateInpBase(selectedBase);
    updateTotalValues(); // Call updateTotalValues here as well
    updatePdps();
  });

selFlat.addEventListener("change", () => {
  const selectedTier = parseInt(selFlat.value);
  updateInpFlatTier(selectedTier);
  updateTotalValues();
  updatePdps();
});

selPhys.addEventListener("change", () => {
  const selectedTier = parseInt(selPhys.value);
  updateInpPhysTier(selectedTier);
  updateTotalValues();
  updatePdps();
});

selHyb.addEventListener("change", () => {
  const selectedTier = parseInt(selHyb.value);
  updateInpHybTier(selectedTier);
  updateTotalValues();
  updatePdps();
});

selSpeed.addEventListener("change", () => {
  const selectedTier = parseInt(selSpeed.value);
  updateInpSpeedTier(selectedTier);
});

selCrit.addEventListener("change", () => {
  const selectedTier = parseInt(selCrit.value);
  updateInpCritTier(selectedTier);
  updateTotalValues();
});


// Add event listeners to update total values when input values change
const inputElements = [
  inpFlatMin,
  inpFlatMax,
  inpBaseMin,
  inpBaseMax,
  inpPhys,
  inpHyb,
  inpSpeed,
  inpQual,
  inpCrit
];

inputElements.forEach(input => {
  input.addEventListener('input', () => {
    updateTotalValues();
    updatePdps();
  });
});




// Initialize input elements with numerical values (optional)

// Functions for EventListeners from above, for changes in Tiers in Select elements

function updateInpBase(baseName) {
  if (baseData && baseData[baseName]) {
      inpBaseMin.value = baseData[baseName].min;
      inpBaseMax.value = baseData[baseName].max;
      inpBaseAps.value = baseData[baseName].aps; //Added line
  } else {
      inpBaseMin.value = "";
      inpBaseMax.value = "";
      inpBaseAps.value = ""; //Added line
      console.error("Invalid base selected:", baseName);
  }
}

// Update span elements when base tier changes
selBase.addEventListener("change", () => {
  const selectedBase = selBase.value;
  updateInpBase(selectedBase);
  updateTotalValues();
});

function updateInpFlatTier(tier) {
  const selectedWeaponType = selWep.value;
  const isTwoHanded = weaponData[selectedWeaponType].h === "2";
  const tierData = isTwoHanded ? tiersFlat2h[tier] : tiersFlat[tier];

  if (tierData) {
    // Set min and max for reference
    inpFlatMin.min = tierData.min1;
    inpFlatMin.max = tierData.max1;
    inpFlatMin.value = tierData.max1; // Set initial value to max

    inpFlatMax.min = tierData.min2;
    inpFlatMax.max = tierData.max2;
    inpFlatMax.value = tierData.max2; // Set initial value to max

    if (tier !== "0") {
      inpFlatMin.value = tierData.max1; // Set initial value to max
      inpFlatMax.value = tierData.max2; // Set initial value to max
    } else {
      inpFlatMin.value = "";
      inpFlatMax.value = "";
    }

    // Update span elements for reference (optional)
    // Note: minFlatValue and maxFlatValue are not defined in your provided code
    // if (minFlatValue && maxFlatValue) {
    //   minFlatValue.textContent = tierData.max1;
    //   maxFlatValue.textContent = tierData.max2;
    // }

    displayTierValues.style.display = "block"; // Should this be "block" or "none"? Check your UI needs
  } else {
    console.error("Invalid flat tier selected:", tier);
    displayTierValues.style.display = "none";
  }
}

function updateInpPhysTier(tier) {
  const tierData = tiersPhys[tier];

  if (tierData) {
    inpPhys.min = tierData.min; // Set minimum value based on tier
    inpPhys.max = tierData.max; // Set maximum value based on tier
    inpPhys.value = tierData.max; // Set initial value to max(optional)
    // Update display elements (optional)
    displayTierValues.style.display = "none";
  } else {
    // Handle invalid tier selection (optional)
    console.error("Invalid Phys tier selected:", tier);
    displayTierValues.style.display = "none";
  }
}


function updateInpHybTier(tier) {
  const tierData = tiersHyb[tier];

  if (tierData) {
    inpHyb.min = tierData.min; // Set minimum value based on tier
    inpHyb.max = tierData.max; // Set maximum value based on tier
    inpHyb.value = tierData.max; // Set initial value to max (optional)
    // Update display elements (optional)
    displayTierValues.style.display = "none";
  } else {
    // Handle invalid tier selection (optional)
    console.error("Invalid Hyb tier selected:", tier);
    displayTierValues.style.display = "none";
  }
}

// Update the Attack Speed when Tier is Selected

function updateInpSpeedTier(tier) {
  const tierData = tiersSpeed[tier];

  if (tierData) {
    inpSpeed.min = tierData.min; // Set minimum value based on tier
    inpSpeed.max = tierData.max; // Set maximum value based on tier
    // (Optional) Set initial value for inpSpeed (e.g., inpSpeed.value = tierData.max)
    inpSpeed.value = tierData.max;
  } else {
    // Handle invalid tier selection (optional)
    console.error("Invalid Speed tier selected:", tier);
  }
}

function updateInpCritTier(tier) {
  const tierData = tiersCrit[tier];

  if (tierData) {
    inpCrit.min = tierData.min;
    inpCrit.max = tierData.max;
    inpCrit.value = tierData.max; // Set initial value to max
  } else {
    console.error("Invalid Crit tier selected:", tier);
  }
}




function updatePdps() {
  const minPdps = parseFloat(totalMin.innerText); // Assuming wepMin exists
  const maxPdps = parseFloat(totalMax.innerText); // Assuming wepMax exists
  const aps = parseFloat(wepAps.innerText);

  const finalDPS = ((minPdps + maxPdps) / 2) * aps;

  basePdps.innerText = finalDPS.toFixed(0);
}


function updateTotalValues() {
  const minFlatValue = parseInt(inpFlatMin.value) || 0;
  const maxFlatValue = parseInt(inpFlatMax.value) || 0;
  const minBaseValue = parseInt(inpBaseMin.value) || 0;
  const maxBaseValue = parseInt(inpBaseMax.value) || 0;
  const incQual = parseInt(inpQual.value);
  const qualityMultiplier = isNaN(incQual) ? 1 : (1 + incQual / 100);

  let inpPhysValue = parseInt(inpPhys.value);
  let inpHybValue = parseInt(inpHyb.value);

  // Handle empty string input
  if (isNaN(inpPhysValue)) {
    inpPhysValue = 0;
  }
  if (isNaN(inpHybValue)) {
    inpHybValue = 0;
  }

  // Calculate total values based on tier selection
  let minTotal = minBaseValue + minFlatValue;
  let maxTotal = maxBaseValue + maxFlatValue;

  if (minFlatValue > 0 || maxFlatValue > 0) {
    // If flat tiers are selected, calculate using totalFlats
    const totalFlats = minFlatValue + maxFlatValue;

    // Determine multiplier based on tier selection
    let multiplier = 1;
    if (inpPhysValue > 0 || inpHybValue > 0) {
      const totalTierValue = inpPhysValue + inpHybValue;
      multiplier = 1 + totalTierValue / 100;
    }

    // Apply multiplier without rounding first
    minTotal *= multiplier;
    maxTotal *= multiplier;


    
  } else {
    // If flat tiers are not selected, use base values directly
    if (inpPhysValue > 0 || inpHybValue > 0) {
      const totalTierValue = inpPhysValue + inpHybValue;
      multiplier = 1 + totalTierValue / 100;

      minTotal = Math.round(minBaseValue * multiplier);
      maxTotal = Math.round(maxBaseValue * multiplier);
    }
  }

  // Apply quality multiplier at the end
  minTotal = minTotal * qualityMultiplier;
  maxTotal = maxTotal * qualityMultiplier;

  totalMin.innerText = Math.round(minTotal);
  totalMax.innerText = Math.round(maxTotal);
  wepQual.innerText = isNaN(incQual) ? 0 : incQual;

  // Update `wepAps` based on base APS and speed modifier
  const selectedBase = selBase.value;
  const baseItem = baseData[selectedBase]; // Use baseData to access the correct weapon data
  const baseCritChance = baseItem ? baseItem.crit : 0;

// Get the crit multiplier from inpCrit, handling invalid input
const critMultiplierInput = parseFloat(inpCrit.value);
const critMultiplier = isNaN(critMultiplierInput) ? 0 : critMultiplierInput;

// Calculate the total crit chance
const totalCritChance = baseCritChance + critMultiplier;

  // Display the calculated crit chance in the wepCrit element
  wepCrit.innerText = totalCritChance.toFixed(2) + "%";

  if (baseData) {
    const baseItem = baseData[selectedBase]; // Access the specific base item

    if (baseItem && baseItem.hasOwnProperty('aps')) {
        const baseAps = parseFloat(baseItem.aps);
        wepAps.innerText = baseAps.toFixed(2);
        inpBaseAps.value = baseAps.toFixed(2);

        const speedModifier = parseFloat(inpSpeed.value) / 100;
        if (!isNaN(speedModifier)) {
            const totalAps = baseAps * (1 + speedModifier);
            wepAps.innerText = totalAps.toFixed(2);
        } else {
            wepAps.innerText = baseAps.toFixed(2);
        }
    } else {
        wepAps.innerText = "Invalid Base Data";
        inpBaseAps.value = 0;
    }
} else {
    wepAps.innerText = "Base not selected";
    inpBaseAps.value = 0;
}

selSpeed.addEventListener('change', () => {
  // Update inpSpeed value based on selSpeed selection
  // ... (code to update inpSpeed based on selSpeed)
  // Trigger updateTotalValues to recalculate and display
  updateTotalValues();
  updatePdps();
});
}


selBase.addEventListener('change', () => {
  const selectedBase = selBase.value;

  wepName.textContent = selBase.options[selBase.selectedIndex].text;
  updateInpBase(selectedBase);
  updateTotalValues();

// Functions for updating tiers of Phys, Hyb, Speed (similar to updateInpFlatTier)
// Implement similar logic for updateInpPhysTier, updateInpHybTier, and updateInpSpeedTier functions
updatePdps();

function updateVisitCount() {
  // Using your specific URL for the namespace
  fetch('https://api.countapi.xyz/hit/pathofjs.github.io/poe2pdps/visits')
  .then(response => response.json())
  .then(data => {
      document.getElementById('visit-count').innerText = data.value;
  })
  .catch(error => console.error('Error:', error));
}

updateVisitCount();

});






});