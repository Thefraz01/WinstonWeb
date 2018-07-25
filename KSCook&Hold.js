//* set General settings, adjust view, hide general settings start equip settings;

function setGenSettings() {
    
    if (document.getElementById("Hold Equip").checked) {
        document.getElementById("holdSettingDiv").style.display = "block";
        document.getElementById("holdTimeDiv").style.display = "block";
        document.getElementById("holdHoursDiv").style.display = "block";
        document.getElementById("holdMinutesDiv").style.display = "block";
        document.getElementById("fileNameDiv").style.display="none";
        document.getElementById("EquipDiv").style.display="none";
        document.getElementById("tempScaleDiv").style.display="none";
        document.getElementById("GeneralSettingsDiv").style.display="none";
        document.getElementById("genSettingsLabelDiv").style.display = "none";
        document.getElementById("holdTimeButtonDiv").style.display = "block";
    }
    else if (document.getElementById("Cook and Hold Equip").checked) {
        document.getElementById("cookSettingsDiv").style.display = "block";
        document.getElementById("DProbeTimer").style.display = "block";
        document.getElementById("probeDiv").style.display = "none";
        document.getElementById("cookTime1").style.display = "block";
        document.getElementById("cookTime2").style.display = "block";
        document.getElementById("cookTime3").style.display = "block";
        document.getElementById("cookTime4").style.display = "block";
        document.getElementById("cookTimeButtonDiv").style.display = "block";
        document.getElementById("fileNameDiv").style.display="none";
        document.getElementById("EquipDiv").style.display="none";
        document.getElementById("tempScaleDiv").style.display="none";
        document.getElementById("GeneralSettingsDiv").style.display="none";
        document.getElementById("genSettingsLabelDiv").style.display = "none";
    }
    else if (document.getElementById("Retherm Equip").checked) {
        document.getElementById("cookSettingsDiv").style.display = "block";
        document.getElementById("DProbeTimer").style.display = "block";
        document.getElementById("probeDiv").style.display = "none";
        document.getElementById("cookTime1").style.display = "block";
        document.getElementById("cookTime2").style.display = "block";
        document.getElementById("cookTime3").style.display = "block";
        document.getElementById("cookTime4").style.display = "block";
        document.getElementById("cookTimeButtonDiv").style.display = "block";
        document.getElementById("fileNameDiv").style.display="none";
        document.getElementById("EquipDiv").style.display="none";
        document.getElementById("tempScaleDiv").style.display="none";
        document.getElementById("GeneralSettingsDiv").style.display="none";
        document.getElementById("genSettingsLabelDiv").style.display = "none";
    }
    
} 



//* set probe temp value and check parameters

function setProbeTemp() {
    if ((document.getElementById("Probe").checked) && (document.getElementById("Celsius").checked)) {
        
        
        x = document.getElementById("Probe Temp").value;
        try { 
            if((x == "") || (x >93) || (x < 32) || (isNaN(x))) {
                alert ("Probe Temperature must be between 32 and 93 degrees C");
            }
            else {
                document.getElementById('Probe Temp Value').value = (((x * 9/5) + 32) * 10);
                document.getElementById("DProbeTimer").style.display = "none";
                document.getElementById("probeDiv").style.display = "none";
                document.getElementById("cookTime1").style.display = "none";
                document.getElementById("cookTime2").style.display = "none";
                document.getElementById("cookTime3").style.display = "none";
                document.getElementById("cookTime4").style.display = "none";
                document.getElementById("vapTempCookDiv").style.display = "block";
                document.getElementById("vapCookButtonDiv").style.display = "block";
            }
        }
        catch(err) {
            message.innerHTML = "" + err;
        }
    } 
    else if ((document.getElementById("Probe").checked) && (document.getElementById("Fahrenheit").checked)){
        
        
        x = document.getElementById("Probe Temp").value;
        try { 
            if((x == "") || (isNaN(x)) || (x > 200) || (x < 90)) {
                alert ("Probe Temperature must be between 90 and 200 degrees F");
            }    
            else {
                document.getElementById('Probe Temp Value').value = (x * 10);
                document.getElementById("DProbeTimer").style.display = "none";
                document.getElementById("probeDiv").style.display = "none";
                document.getElementById("cookTime1").style.display = "none";
                document.getElementById("cookTime2").style.display = "none";
                document.getElementById("cookTime3").style.display = "none";
                document.getElementById("cookTime4").style.display = "none";
                document.getElementById("cookTimeButtonDiv").style.display = "none";
                document.getElementById("vapTempCookDiv").style.display = "block";
                document.getElementById("vapCookButtonDiv").style.display = "block";
            }
        }
        catch(err) {
            message.innerHTML = "" + err;
        }
        
    }
    
} 

//* Set Cook time and calculate value

function setCookTime() {
    if ((document.getElementById("Cook Timer").checked) && (document.getElementById("Cook Timer Set").checked)) {

        x = ((document.getElementById('Cook Hours').value * 3600) + (document.getElementById('Cook Minutes').value * 60));
        try { 
            if((isNaN(x)) || (x > 356400) || (x < 60)) {
                  alert ("Cook time must be at least one minute and cannot excede 99 hours.");
            }      
            else {
                document.getElementById("Cook Time Value").value = x;
                document.getElementById("DProbeTimer").style.display = "none";
                document.getElementById("probeDiv").style.display = "none";
                document.getElementById("cookTime1").style.display = "none";
                document.getElementById("cookTime2").style.display = "none";
                document.getElementById("cookTime3").style.display = "none";
                document.getElementById("cookTime4").style.display = "none";
                document.getElementById("cookTimeButtonDiv").style.display = "none";
                document.getElementById("vapTempCookDiv").style.display = "block";
                document.getElementById("vapCookButtonDiv").style.display = "block";

            }
            
        }
        catch(err) {
            message.innerHTML = "" + err;
        }
    } 
    if (document.getElementById("Cook Time Infinite").checked) {
        document.getElementById("DProbeTimer").style.display = "none";
        document.getElementById("probeDiv").style.display = "none";
        document.getElementById("cookTime1").style.display = "none";
        document.getElementById("cookTime2").style.display = "none";
        document.getElementById("cookTime3").style.display = "none";
        document.getElementById("cookTime4").style.display = "none";
        document.getElementById("cookTimeButtonDiv").style.display = "none";
        document.getElementById("vapTempCookDiv").style.display = "block";
        document.getElementById("vapCookButtonDiv").style.display = "block";
    }
    
}

//* set Vapor Cook Temp and check parameters 

function setVapCookTemp() {
    if ((document.getElementById("Vapor Temperature Cook Set").checked) && (document.getElementById("Celsius").checked)) {  
        
        x = document.getElementById("Vapor Cook Set").value;
        try { 
            if((x == "") || (isNaN(x)) || (x > 93) || (x < 32)) {
                   alert ("Cooking Vapor Temperature must be between 32 and 93 degrees C");
            }       
            else {
                document.getElementById('Vap Cook Value').value = (((x * 9/5) + 32) * 10);
                document.getElementById("vapTempCookDiv").style.display = "none";
                document.getElementById("vapCookSetDiv").style.display = "none";
                document.getElementById("airTempCookDiv").style.display = "block";
                document.getElementById("airCookButtonDiv").style.display = "block";
                document.getElementById("vapCookButtonDiv").style.display = "none";
            }
        }
        catch(err) {
            message.innerHTML = "" + err;
        }
    }
    if ((document.getElementById("Vapor Temperature Cook Set").checked) && (document.getElementById("Fahrenheit").checked)) {  
        
        x = document.getElementById("Vapor Cook Set").value;
        try { 
            if((x == "") || (isNaN(x)) || (x > 200) || (x < 90))  {
                alert ("Cooking Vapor Temperature must be between 90 and 200 degrees F");
            }    
            else {
                document.getElementById('Vap Cook Value').value = (x * 10);
                document.getElementById("vapTempCookDiv").style.display = "none";
                document.getElementById("vapCookSetDiv").style.display = "none";
                document.getElementById("airTempCookDiv").style.display = "block";
                document.getElementById("airCookButtonDiv").style.display = "block"
                document.getElementById("vapCookButtonDiv").style.display = "none";
            }
        }
        catch(err) {
            message.innerHTML = "" + err;
        }
    }
    if ((document.getElementById("Vapor Temperature Cook Off").checked)) {
        document.getElementById("vapTempCookDiv").style.display = "none";
        document.getElementById("vapCookSetDiv").style.display = "none";
        document.getElementById("airTempCookDiv").style.display = "block";
        document.getElementById("airCookButtonDiv").style.display = "block";
        document.getElementById("vapCookButtonDiv").style.display = "none";
    }
}

//* Set Air Cook Temp and check parameters.

function setAirCookTemp() {
    
        
    if ((document.getElementById("Air Temperature Cook Set").checked) && (document.getElementById("Celsius").checked)) {  
        x = document.getElementById("Air Cook Set").value;
        y = document.getElementById("Vapor Cook Set").value;
        try { 
            if((x == "") || (isNaN(x)) || (x > 176) || (x < 32)) {
                   alert ("Cooking Air Temperature must be between 32 and 176 degrees C");
            } 
            if (x < y) {
                alert ("Air temperature can not be lower than vapor temperature.");
            }      
            else {
                document.getElementById('Air Cook Value').value = (((x * 9/5) + 32) * 10);
                document.getElementById("airTempCookDiv").style.display = "none";
                document.getElementById("airCookSetDiv").style.display = "none";
                document.getElementById("airCookButtonDiv").style.display = "none";
                document.getElementById("convectionCookDiv").style.display = "block";
                document.getElementById("finishCookSettingsDiv").style.display = "block"
                if ((document.getElementById("Sous Vide Cook").checked) || (document.getElementById("Cook Time Infinite".checked) || document.getElementById("Probe").checked) || (document.getElementById("Vapor Temperature Cook Off").checked)) {
                    document.getElementById("highYieldCookDiv").style.display = "none";
                }
                else {
                    document.getElementById("highYieldCookDiv").style.display = "block";
                }
            }
        }
        catch(err) {
            message.innerHTML = "" + err;
        }
    }
    if ((document.getElementById("Air Temperature Cook Set").checked) && (document.getElementById("Fahrenheit").checked)) {  
        x = document.getElementById("Air Cook Set").value;
        y = document.getElementById("Vapor Cook Set").value;
        try { 
            if((x == "") || (isNaN(x)) || (x > 350) || (x < 90))  {
                alert ("Cooking Air Temperature must be between 90 and 350 degrees F");
            }  
            if (x < y) {
                alert ("Air temperature can not be lower than vapor temperature.");  
            }  
            else {
                document.getElementById('Air Cook Value').value = (x * 10);
                document.getElementById("airTempCookDiv").style.display = "none";
                document.getElementById("airCookSetDiv").style.display = "none";
                document.getElementById("airCookButtonDiv").style.display = "none";
                document.getElementById("convectionCookDiv").style.display = "block";
                document.getElementById("finishCookSettingsDiv").style.display = "block"
                if ((document.getElementById("Sous Vide Cook").checked) || (document.getElementById("Cook Time Infinite".checked) || document.getElementById("Probe").checked) || (document.getElementById("Vapor Temperature Cook Off").checked)) {
                    document.getElementById("highYieldCookDiv").style.display = "none";
                }
                else {
                    document.getElementById("highYieldCookDiv").style.display = "block";
                }
            }
        }
        catch(err) {
            message.innerHTML = "" + err;
        }
    }
    if (document.getElementById("Air Temperature Cook Off").checked) {
        document.getElementById("airTempCookDiv").style.display = "none";
        document.getElementById("airCookSetDiv").style.display = "none";
        document.getElementById("airCookButtonDiv").style.display = "none";
        document.getElementById("convectionCookDiv").style.display = "block";
        document.getElementById("finishCookSettingsDiv").style.display = "block" 
    }
    if (document.getElementById("Sous Vide Cook").checked) {
        document.getElementById("airTempCookDiv").style.display = "none";
        document.getElementById("airCookSetDiv").style.display = "none";
        document.getElementById("airCookButtonDiv").style.display = "none";
        document.getElementById("convectionCookDiv").style.display = "block";
        document.getElementById("finishCookSettingsDiv").style.display = "block" 
    }
}

//* Checks values to make sure Sous Vide can be used: 

function sousVideCook() {
   
  
  y = document.getElementById("Vapor Cook Set").value;

  if (document.getElementById("Vapor Temperature Cook Off").checked) {
        alert("Sous Vide cannot be used when Vapor Temperature is set to off.");
        document.getElementById("Air Temperature Cook Off").checked = true;
        document.getElementById("Air Temperature Cook Sous Vide").checked = false;    
  }    
  else if((y < 90 || y > 150) && (document.getElementById("Fahrenheit").checked)) {
      alert("Sous Vide may only be used when Vapor temperature is between 90 and 150 degrees F.");
      document.getElementById("Air Temperature Cook Off").checked = true;
      document.getElementById("Air Temperature Cook Sous Vide").checked = false;
   }
   else if((y < 32 || y > 66) && (document.getElementById("Celsius").checked)) {
        alert("Sous Vide may only be used when Vapor temperature is between 32 and 66 degrees C.");
        document.getElementById("Air Temperature Cook Off").checked = true;
        document.getElementById("Air Temperature Cook Sous Vide").checked = false;
   }
   if (document.getElementById("High Yield Cook").checked) {
        alert("High Yield and Sous Vide may not be used at the same time.");
        document.getElementById("Air Temperature Cook Off").checked = true;
        document.getElementById("Air Temperature Sous Vide").checked = false;
    }
   else {
       document.getElementById("airCookSetDiv").style.display = "none";
       document.getElementById("highYieldCookDiv").style.display = "none";
       document.getElementById("High Yield Cook Off").checked = "true";
    }
    
}

function finishCook() {
    if (document.getElementById("Cook Time Infinite").checked) {
        document.getElementById("convectionCookDiv").style.display = "none";
        document.getElementById("finishCookSettingsDiv").style.display = "none"
        document.getElementById("highYieldCookDiv").style.display = "none";
        document.getElementById("cookSettingsDiv").style.display = "none";
        document.getElementById("addChannelDiv").style.display = "block";
        document.getElementById("saveFormButton").style.display = "block";
    }
    else {
        document.getElementById("holdSettingDiv").style.display = "block";
        document.getElementById("holdTimeDiv").style.display = "block";
        document.getElementById("holdHoursDiv").style.display = "block";
        document.getElementById("holdMinutesDiv").style.display = "block";
        document.getElementById("convectionCookDiv").style.display = "none";
        document.getElementById("finishCookSettingsDiv").style.display = "none"
        document.getElementById("highYieldCookDiv").style.display = "none";
        document.getElementById("cookSettingsDiv").style.display = "none";
        document.getElementById("holdTimeButtonDiv").style.display = "block";
    }    
}

function setHoldTime() {
    if (document.getElementById("Hold Timer Set").checked) {

        x = ((document.getElementById('Hold Hours').value * 3600) + (document.getElementById('Hold Minutes').value * 60));
        try { 
            if((isNaN(x)) || (x > 356400) || (x < 60)) {
                  alert ("Hold time must be at least one minute and cannot excede 99 hours.");
            }      
            else {
                document.getElementById("Hold Time Value").value = x;
                document.getElementById("holdTimeDiv").style.display = "none";
                document.getElementById("holdTimeSetDiv").style.display = "none";
                document.getElementById("holdHoursDiv").style.display = "none";
                document.getElementById("holdMinutesDiv").style.display = "none";
                document.getElementById("holdTimeButtonDiv").style.display = "none";
                document.getElementById("vapHoldDiv").style.display = "block";
                document.getElementById("vapHoldButtonDiv").style.display = "block";

            }
            
        }
        catch(err) {
            message.innerHTML = "" + err;
        }
    } 
    if (document.getElementById("Cook Time Infinite").checked) {
        document.getElementById("holdTime1").style.display = "none";
                document.getElementById("holdTime2").style.display = "none";
                document.getElementById("holdTime3").style.display = "none";
                document.getElementById("holdTime4").style.display = "none";
                document.getElementById("holdTimeButtonDiv").style.display = "none";
                document.getElementById("vapTempHoldDiv").style.display = "block";
                document.getElementById("vapHoldButtonDiv").style.display = "block";
            
    }
    
}

function enterVapHold() {
    if ((document.getElementById("Vapor Temperature Hold Set").checked) && (document.getElementById("Fahrenheit").checked)) {  
        
        x = document.getElementById("Vapor Hold Set").value;
        try { 
            if((x == "") || (isNaN(x)) || (x > 200) || (x < 90)) {
                alert ("Holding Vapor Temperature must be between 90 and 200 degrees F");
            }
            else {
                document.getElementById("Vap Hold Value").value = (x * 10);
                document.getElementById("vapHoldDiv").style.display = "none";
                document.getElementById("vapHoldSetDiv").style.display = "none";
                document.getElementById("vapHoldButtonDiv").style.display = "none";
                document.getElementById("airTempHoldDiv").style.display ="block";
                document.getElementById("airHoldButtonDiv").style.display ="block";
            }
        }    
        catch(err) {
            message.innerHTML = "" + err;
        }
    }
    if ((document.getElementById("Vapor Temperature Hold Set").checked) && (document.getElementById("Celsius").checked)) {  
        
        x = document.getElementById("Vapor Hold Set").value;
        try { 
            if((x == "") || (isNaN(x)) || (x > 93) || (x < 32)) {
                alert ("Holding Vapor Temperature must be between 32 and 93 degrees C");
            }
            else {
                document.getElementById("Vap Hold Value").value = (((x * 9/5) + 32) * 10);
                document.getElementById("vapHoldDiv").style.display = "none";
                document.getElementById("vapHoldSetDiv").style.display = "none";
                document.getElementById("vapHoldButtonDiv").style.display = "none";
                document.getElementById("airTempHoldDiv").style.display ="block";
                document.getElementById("airHoldButtonDiv").style.display ="block";
            }
        }
        catch(err) {
            message.innerHTML = "" + err;
        }
    }

    if (document.getElementById("Vapor Temperature Hold Off").checked) {
        document.getElementById("Vap Hold Value").value = x;
        document.getElementById("vapHoldDiv").style.display = "none";
        document.getElementById("vapHoldSetDiv").style.display = "none";
        document.getElementById("vapHoldButtonDiv").style.display = "none";
        document.getElementById("airTempHoldDiv").style.display ="block";
        document.getElementById("airHoldButtonDiv").style.display ="block";
    }

}

function enterAirHold() {
    if ((document.getElementById("Air Temperature Hold Set").checked) && (document.getElementById("Fahrenheit").checked)) {  
        x = document.getElementById("Air Hold Set").value;
        y = document.getElementById("Vapor Hold Set").value;
        try { 
            if((x == "") || (isNaN(x)) || (x > 350) || (x < 90))  {
                alert ("Air Temperature must be between 90 and 350 degrees F");
            }  
            if (x < y) {
                alert ("Air temperature can not be lower than vapor temperature.");  
            }  
            else {
                document.getElementById('Air Hold Value').value = (x * 10);
                document.getElementById("airTempHoldDiv").style.display = "none";
                document.getElementById("airHoldSetDiv").style.display = "none";
                document.getElementById("airHoldButtonDiv").style.display = "none";
                document.getElementById("convectionHoldDiv").style.display = "block";
                document.getElementById("finishHoldSettingsDiv").style.display = "block"
            }
        }
        catch(err) {
            message.innerHTML = "" + err;
        }
    }
    if (document.getElementById("Air Temperature Hold Off").checked) {
        document.getElementById("airTempHoldDiv").style.display = "none";
        document.getElementById("airHoldSetDiv").style.display = "none";
        document.getElementById("airHoldButtonDiv").style.display = "none";
        document.getElementById("convectionHoldDiv").style.display = "block";
        document.getElementById("finishHoldSettingsDiv").style.display = "block"; 
    }
    if (document.getElementById("Air Temperature Hold Sous Vide").checked) {
        document.getElementById("airTempHoldDiv").style.display = "none";
        document.getElementById("airHoldSetDiv").style.display = "none";
        document.getElementById("airHoldButtonDiv").style.display = "none";
        document.getElementById("convectionHoldDiv").style.display = "block";
        document.getElementById("finishHoldSettingsDiv").style.display = "block"; 
    }    
}

function finishHold() {
    document.getElementById("convectionHoldDiv").style.display = "none";
    document.getElementById("finishHoldSettingsDiv").style.display = "none";
    document.getElementById("addChannelDiv").style.display = "block";
    document.getElementById("saveFormButton").style.display = "block";
}



function sousVideWarning2() {
  
    y = document.getElementById("Vapor Hold Set").value;

    if (document.getElementById("Vapor Temperature Hold Off").checked) {
        alert("Sous Vide cannot be used when Vapor Temperature is set to off.");
        document.getElementById("Air Temperature Hold Off").checked = true;
        document.getElementById("Air Temperature Hold Sous Vide").checked = false; 
    }
    if((y < 90 || y > 150) && (document.getElementById("Fahrenheit").checked)) {
        alert("Sous Vide may only be used when Vapor temperature is between 90 and 150 degrees F.");
        document.getElementById("Air Temperature Hold Off").checked = true;
        document.getElementById("Air Temperature Hold Sous Vide").checked = false;
    }
    if((y < 32 || y > 66) && (document.getElementById("Celsius").checked)) {
        alert("Sous Vide may only be used when Vapor temperature is between 32 and 66 degrees C.");
        document.getElementById("Air Temperature Hold Off").checked = true;
        document.getElementById("Air Temperature Hold Sous Vide").checked = false;
    }
    else (document.getElementById("airHoldSetDiv").style.display = "none");
    
}

function showHoldOnly() {
    if (document.getElementById("Hold Only").checked) {
        document.getElementById("Cook Process Value").value = "0";
    }
    else {
        document.getElementById("Cook Process Value").value = "1";
    }
    document.getElementById("cookSettingsDiv").style.display = "none";
    document.getElementById("DProbeTimer").style.display = "none";
    document.getElementById("probeDiv").style.display = "none";
    document.getElementById("cookTime1").style.display = "none";
    document.getElementById("cookTime2").style.display = "none";
    document.getElementById("cookTime3").style.display = "none";
    document.getElementById("cookTime4").style.display = "none";
    document.getElementById("vapTempCookDiv").style.display = "none";
    document.getElementById("vapCookSetDiv").style.display = "none";
    document.getElementById("airTempCookDiv").style.display = "none";
    document.getElementById("airHoldSetDiv").style.display = "none";
    document.getElementById("highYieldCookDiv").style.display = "none";
    document.getElementById("convectionCookDiv").style.display = "none";
    document.getElementById("cookFanDiv").style.display = "none";
    document.getElementById("holdSettingDiv").style.display = "block";
    document.getElementById("holdTimeDiv").style.display = "block";
    document.getElementById("holdHoursDiv").style.display = "block";
    document.getElementById("holdMinutesDiv").style.display = "block";
    document.getElementById("vapHoldDiv").style.display = "block";
    document.getElementById("airTempHoldDiv").style.display = "block";
    document.getElementById("convectionHoldDiv").style.display = "block";
    document.getElementById("holdFanDiv").style.display = "block";
    document.getElementById("vapHoldDiv").style.display = "block";
    document.getElementById("High Yield Cook").checked = false;
    document.getElementById("High Yield Cook Off").checked = true; 
    document.getElementById("Convection Cook").checked = false;
    document.getElementById("Convection Cook Off").checked = true;
    document.getElementById("Cook Fan").checked = false;
    document.getElementById("Cook Fan Off").checked = true;
    
    
    
}

function showCookAndHold() {
    if (document.getElementById("Cook and Hold").checked) {
        document.getElementById("Cook Process Value").value = "1";
    }
    else {
        document.getElementById("Cook Process Value").value = "0";
    }

    document.getElementById("cookSettingsDiv").style.display = "block";
    document.getElementById("DProbeTimer").style.display = "block";
    document.getElementById("probeDiv").style.display = "none";
    document.getElementById("cookTime1").style.display = "block";
    document.getElementById("cookTime2").style.display = "block";
    document.getElementById("cookTime3").style.display = "block";
    document.getElementById("cookTime4").style.display = "block";
    document.getElementById("vapTempCookDiv").style.display = "block";
    document.getElementById("vapCookSetDiv").style.display = "none";
    document.getElementById("airTempCookDiv").style.display = "block";
    
    document.getElementById("highYieldCookDiv").style.display = "block";
    document.getElementById("convectionCookDiv").style.display = "block";
    document.getElementById("cookFanDiv").style.display = "block";
    document.getElementById("holdSettingDiv").style.display = "block";
    document.getElementById("holdTimeDiv").style.display = "block";
    document.getElementById("holdHoursDiv").style.display = "block";
    document.getElementById("holdMinutesDiv").style.display = "block";
    document.getElementById("vapHoldDiv").style.display = "block";
    
    document.getElementById("airTempHoldDiv").style.display = "block";
    document.getElementById("convectionHoldDiv").style.display = "block";
    document.getElementById("holdFanDiv").style.display = "block"; 
    
    
}

function showProbe() {
    
    
    if (document.getElementById("High Yield Cook").checked) {
        alert("Probe may not be used at the same time as High Yield.");
        document.getElementById("Probe").checked = false;
        document.getElementById("probeDiv").style.display = "none";
        document.getElementById("cookTime1").style.display = "block";
        document.getElementById("cookTime2").style.display = "block";
        document.getElementById("cookTime3").style.display = "block";
        document.getElementById("cookTime4").style.display = "block";
        document.getElementById("cookTimeButtonDiv").style.display = "block";
    }
    else {
        document.getElementById("Cook Type Value").value = "1";
        document.getElementById("probeDiv").style.display = "block";
        document.getElementById("cookTime1").style.display = "none";
        document.getElementById("cookTime2").style.display = "none";
        document.getElementById("cookTime3").style.display = "none";
        document.getElementById("cookTime4").style.display = "none";
        document.getElementById("cookTimeButtonDiv").style.display = "none";
        document.getElementById("Cook Hours").value = "";
        document.getElementById("Cook Minutes").value = "";
    }    
}

function showTimer() {
    document.getElementById("Cook Type Value").value = "0";
    document.getElementById("probeDiv").style.display = "none";
    document.getElementById("cookTime1").style.display = "block";
    document.getElementById("cookTime2").style.display = "block";
    document.getElementById("cookTime3").style.display = "block";
    document.getElementById("cookTime4").style.display = "block";
    document.getElementById("cookTimeButtonDiv").style.display = "block";
    document.getElementById("Probe Temp").value = "";
    if ((document.getElementById("Vapor Temperature Off").checked) || (document.getElementById("Probe").checked) || (document.getElementById("Vapor Temperature Cook Sous Vide").checked)) {
        document.getElementById("highYieldCookDiv").style.display = "none";
    }
    
    else {
        document.getElementById("highYieldCookDiv").style.display = "block"
    }  
}

function infiniteCook() {
    if (document.getElementById("High Yield Cook").checked) {
        alert("Cook Timer may not be set to infinite while High Yield is being used.");
        document.getElementById("Cook Time").checked = false;
        document.getElementById("Cook Timer Set").checked = true;
        document.getElementById("cookTime1").style.display = "block";
        document.getElementById("cookTime2").style.display = "block";
        document.getElementById("cookTime3").style.display = "block";
        document.getElementById("cookTime4").style.display = "block";
        document.getElementById("cookTimeButtonDiv").style.display = "block";
    }
    else {
        var r = confirm("Holding may not be used in conjunction with the infinite setting. Any holding data you have may be lost. Do you wish to proceed?");
        
        if (r==true) {  
            document.getElementById("cookTime2").style.display = "block";
            document.getElementById("cookTime3").style.display = "none";
            document.getElementById("cookTime4").style.display = "none";
            document.getElementById("cookTimeButtonDiv").style.display = "block";
            document.getElementById("highYieldCookDiv").style.display = "none";
            document.getElementById("High Yield Cook").checked = false;
            document.getElementById("High Yield Cook Off").checked = true;
            document.getElementById("Cook Hours").value = "";
            document.getElementById("Cook Minutes").value = "";
        }
        else if (r==false) {
            document.getElementById("Cook Time").checked = false;
            document.getElementById("Cook Timer Set").checked = false; 
        }      
    }      
        
    
}

 
function showVapCookSet() {
    document.getElementById("vapCookSetDiv").style.display = "block";
    document.getElementById("Sous Vide Cook").style.visibility = "visible";
    if ((document.getElementById("Cook Time").checked) || (document.getElementById("Probe").checked) || (document.getElementById("Vapor Temperature Cook Sous Vide").checked)) {
        document.getElementById("highYieldCookDiv").style.display = "none";
    }
    
    else {
        document.getElementById("highYieldCookDiv").style.display = "block"
    } 
}

function hideVapCookSet() {
   
   if (document.getElementById("High Yield Cook").checked) {
        alert("Cook Timer may not be set to infinite while High Yield is being used.");
        document.getElementById("Cook Time").checked = false;
        document.getElementById("Cook Timer Set").checked = true;
   }
   else {
        document.getElementById("vapCookSetDiv").style.display = "none";
        document.getElementById("Sous Vide Cook").style.visibility = "invisible"
        document.getElementById("highYieldCookDiv").style.display = "none";
        document.getElementById("Vapor cook Set").value = "";
   }

}

function showAirCookSet() {
    document.getElementById("airCookSetDiv").style.display = "block";
    if ((document.getElementById("Cook Time").checked) || (document.getElementById("Probe").checked) || (document.getElementById("Vapor Temperature Cook Off").checked)) {
        document.getElementById("highYieldCookDiv").style.display = "none";
        document.getElementById("High Yield Cook").checked = false;
        document.getElementById("High Yield Cook Off").checked = true;
    }
    else {
        document.getElementById("highYieldCookDiv").style.display = "block"
    } 
    
    
}

function hideAirCookSet() {
    document.getElementById("airCookSetDiv").style.display = "none";
    document.getElementById("Air Cook Set").value = "";
    if ((document.getElementById("Cook Time").checked) || (document.getElementById("Probe").checked) || (document.getElementById("Vapor Temperature Cook Off").checked)) {
        document.getElementById("highYieldCookDiv").style.display = "none"
    }
    else {
        document.getElementById("highYieldCookDiv").style.display = "block"
    } 
    

}
  
function hideHoldTime() {
    document.getElementById("holdHoursDiv").style.display = "none";
    document.getElementById("holdMinutesDiv").style.display = "none";
    document.getElementById("holdTimeSetDiv").style.display = "none";
    document.getElementById("Hold Hours").value = "";
    document.getElementById("Hold Minutes").value = "";
}

function showHoldTime() {
    document.getElementById("holdHoursDiv").style.display = "block";
    document.getElementById("holdMinutesDiv").style.display = "block";
    document.getElementById("holdTimeSetDiv").style.display = "block";
}

function showVapHoldSet() {
    document.getElementById("vapHoldSetDiv").style.display = "block";
}

function hideVapHoldSet() {
    document.getElementById("vapHoldSetDiv").style.display = "none";
    document.getElementById("Vapor Hold Set").value = "";
}

function showAirHoldSet() {
    document.getElementById("airHoldSetDiv").style.display = "block";
}

function hideAirHoldSet() {
    document.getElementById("airHoldSetDiv").style.display = "none";
    document.getElementById("Air Hold Set").value = "";

}

function highYieldAlert() {
    if (document.getElementById("Vapor Temperature Cook Off").checked) {
        alert("High Yield may not be used when Vapor Cook Temperature is set to off.");
        document.getElementById("High Yield Cook").checked = false;
        document.getElementById("High Yield Cook Off").checked = true;
    }
    if (document.getElementById("Sous Vide Cook").checked) {
        alert("High Yield and Sous Vide may not be used at the same time.");
        document.getElementById("High Yield Cook").checked = false;
        document.getElementById("High Yield Cook Off").checked = true;
    } 
    if (document.getElementById("Cook Time").checked) {
        alert("High Yield cannot be used while the cook timer is set to infinite.");
        document.getElementById("High Yield Cook").checked = false;
        document.getElementById("High Yield Cook Off").checked = true;
    }
    if (document.getElementById("High Yield Cook").checked) {
        document.getElementById("High Yield Value").value = "1";
    }
    else {
        document.getElementById("High Yield Value").value = "0";
    }
}

//* Value changes based on checkboxes below


function tempScaleChange() {
    if (document.getElementById("Celsius").checked) {
        document.getElementById("Temp Scale Value").value = "1";
    }
    else {
        document.getElementById("Temp Scale Value").value = "0";
    }
}




    


function highYieldChange() {
    if (document.getElementById("High Yield Cook").checked) {
        document.getElementById("High Yield Value").value = "1";
    }
    else {
        document.getElementById("High Yield Value").value = "0";
    }
}

function cookFanChange() {
    if (document.getElementById("Convection Cook").checked) {
        document.getElementById("Cook Fan Value").value = "1";
    }
    else {
        document.getElementById("Cook Fan Value").value = "0";
    }
}

function holdFanChange() {
    if (document.getElementById("Convection Hold").checked) {
        document.getElementById("Hold Fan Value").value = "1";
    }
    else {
        document.getElementById("Hold Fan Value").value = "0";
    }
}







  




function saveFormAsTextFile()
           {
           var textToSave =
           '<PresetCookHold>' +
           '<Channel>' +
             '<ProbeSetPoint>'+ document.getElementById('Probe Temp Value').value + '</ProbeSetPoint>' +
             '<CookTime>' + document.getElementById("Cook Time Value").value + '</CookTime>' +
             '<CookTempEvap>' + document.getElementById('Vap Cook Value').value + '</CookTempEvap>' +
             '<CookTempAir>' + document.getElementById('Air Cook Value').value + '</CookTempAir>' +
             '<HighYield>' + document.getElementById('High Yield Value').value + '</HighYield>' +
             '<Convection Cook>' + document.getElementById('Cook Fan Value').value + '</Convection Cook>' +
             '<HoldTime>' + document.getElementById("Hold Time Value").value + '</HoldTime>' +
             '<HoldTempEvap>' + document.getElementById("Vap Hold Value").value + '</HoldTempEvap>' +
             '<HoldTempAir>' + document.getElementById('Air Hold Value').value + '</HoldTempAir>' +
             '<HoldFan>' + document.getElementById('Hold Fan Value').value + '</HoldFan>' +
             '</Channel>' +
            '</PresetCookHold>' +
            '<GeneralSettings>'
            '<TempScale>' + document.getElementById('Temp Scale Value').value + '</TempScale>'
            '<GeneralSettings>';
   
           
           var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
           var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
           var fileNameToSaveAs = document.getElementById("filename").value + '.xml';
   
           var downloadLink = document.createElement("a");
           downloadLink.download = fileNameToSaveAs;
           downloadLink.innerHTML = "Download File";
           downloadLink.href = textToSaveAsURL;
           downloadLink.onclick = destroyClickedElement;
           downloadLink.style.display = "none";
           document.body.appendChild(downloadLink);
   
           downloadLink.click();
           }
   
       function destroyClickedElement(event)
           {
           document.body.removeChild(event.target);
           }
    
          
    

        