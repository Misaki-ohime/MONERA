import Form from 'react-bootstrap/Form';

const quinolones =[
"Norfloxacin",
"Orfloxacin",
"Nalixid Acid",
"Perfloxacin",
"Enofloxacin",
"Levofloxacin",
"Ciprofloxacin"
];

const Abr = {quinolones:{Norfloxacin: 'NOR', Orfloxacin: 'ORF',
 Nalixid_Acid: 'NAL', Perfloxacin: 'PER', Enofloxacin: 'ENO', Levofloxacin: 'LEV', Ciprofloxacin: 'CIP'}, 
 Sulfonamide: {
  Trimethopim: 'TRI', Trimethoprim\/Sulfamethoxazole: 'SXT', Sulfamethoxazole: 'SUT', Sulfonamide: 'SUL', Sulfafurazol: 'SUZ', Sulfazotrim: 'SUT'
 }, 
 Penicilin: {
  Carbenicilin: 'CB', Ticarciclin: 'TIC', Amoxicilin: 'AMO', Amoxicillin\-clavulanate:' AMC', Piperacillin: 'PIP', Piperacillin\-tazobactam: 'PIT',
  Ampicilin\-sulbactam: 'AMS', Ampicilin: 'AMP'
 },
 Monobactam: {}
};

const sulfonamide =[
"Trimethopim",
"Trimethoprim/Sulfamethoxazole",
"Sulfamethoxazole",
"Sulfonamide",
"Sulfafurazol",
"Sulfazotrim"
];

const Penicilin = [
"Carbenicilin",
"Ticarciclin",
"Amoxicilin",
"Amoxicillin-clavulanate",
"Piperacillin",
"Piperacillin-tazobactam",
"Ampicilin-sulbactam",
"Ampicilin"
];

const Monobactam = [
"Aztreonam"
];

const Cephalosporin = [
"Ceftiofur",
"Cefazolin",
"Cefoperazone",
"Cefoxitin",
"Cefaclor",
"Cephalotin",
"Cefepime",
"Cefotaxime",
"Ceftazidime",
"Cefexime",
"Cefuroxime",
"Ceftriaxone"
];

const Aminoglycoside = [
"Neomycin",
"Tobramycin",
"Kanamycin",
"Amikacin",
"Streptomycin",
"Gentamicin"
];

const Carbapenem = [
"Ertapenem",
"Meropenem",
"Imipenem"
];

const Macrolides = [
"Erythromicin",
"Azithromycin"
];

const Phenicols = [
"Florfenicol",
"Cloramphenicol"
];

const Polymyxins = [
"Polymyxin-E",
"Polymyxin-B"
];

const Fosfomycin = [
"Fosfomycin"
];

const Tetracycline = [
"Doxycicline",
"Oxitetracicline",
"Minocycline",
"Tetracycline"
];

const tetraclass = {Name: Tetracycline, Abbr:["DOX", "OXI","MIN","TET"]}

 
import { useState } from 'react';

function SwitchAntibiotic() {
  return(
<label>
<select id ="drugs" class="form-control" name="Drugs" multiple size="6">
<optgroup label="Quinolones">
  <option value={quinolones[0]}>{quinolones[0]}</option>
  <option value={quinolones[1]}>{quinolones[1]}</option>
  <option value={quinolones[2]}>{quinolones[2]}</option>
  <option value={quinolones[3]}>{quinolones[3]}</option>
  <option value={quinolones[4]}>{quinolones[4]}</option>
  <option value={quinolones[5]}>{quinolones[5]}</option>
  <option value={quinolones[6]}>{quinolones[6]}</option>
</optgroup>
<optgroup label="Sulfonamide">
  <option value={sulfonamide[0]}>{sulfonamide[0]}</option>
  <option value={sulfonamide[1]}>{sulfonamide[1]}</option>
  <option value={sulfonamide[2]}>{sulfonamide[2]}</option>
  <option value={sulfonamide[3]}>{sulfonamide[3]}</option>
  <option value={sulfonamide[4]}>{sulfonamide[4]}</option>
  <option value={sulfonamide[5]}>{sulfonamide[5]}</option>
</optgroup>
<optgroup label="Penicilin">
  <option value={Penicilin[0]}>{Penicilin[0]}</option>
  <option value={Penicilin[1]}>{Penicilin[1]}</option>
  <option value={Penicilin[2]}>{Penicilin[2]}</option>
  <option value={Penicilin[3]}>{Penicilin[3]}</option>
  <option value={Penicilin[4]}>{Penicilin[4]}</option>
  <option value={Penicilin[5]}>{Penicilin[5]}</option>
  <option value={Penicilin[6]}>{Penicilin[6]}</option>
  <option value={Penicilin[7]}>{Penicilin[7]}</option>
</optgroup>
<optgroup label="Monobactam">
  <option value={Monobactam[0]}>{Monobactam[0]}</option>
</optgroup>
<optgroup label="Cephalosporin">
  <option value={Cephalosporin[0]}>{Cephalosporin[0]}</option>
  <option value={Cephalosporin[1]}>{Cephalosporin[1]}</option>
  <option value={Cephalosporin[2]}>{Cephalosporin[2]}</option>
  <option value={Cephalosporin[3]}>{Cephalosporin[3]}</option>
  <option value={Cephalosporin[4]}>{Cephalosporin[4]}</option>
  <option value={Cephalosporin[5]}>{Cephalosporin[5]}</option>
  <option value={Cephalosporin[6]}>{Cephalosporin[6]}</option>
  <option value={Cephalosporin[7]}>{Cephalosporin[7]}</option>
  <option value={Cephalosporin[7]}>{Cephalosporin[7]}</option>
  <option value={Cephalosporin[8]}>{Cephalosporin[8]}</option>
</optgroup>
<optgroup label="Aminoglycoside">
  <option value={Aminoglycoside[0]}>{Aminoglycoside[0]}</option>
  <option value={Aminoglycoside[1]}>{Aminoglycoside[1]}</option>
  <option value={Aminoglycoside[2]}>{Aminoglycoside[2]}</option>
  <option value={Aminoglycoside[3]}>{Aminoglycoside[3]}</option>
  <option value={Aminoglycoside[4]}>{Aminoglycoside[4]}</option>
</optgroup>
<optgroup label="Carbapenem">
  <option value={Carbapenem[0]}>{Carbapenem[0]}</option>
  <option value={Carbapenem[1]}>{Carbapenem[1]}</option>
  <option value={Carbapenem[2]}>{Carbapenem[2]}</option>
</optgroup>
<optgroup label="Macrolides">
  <option value={Macrolides[0]}>{Macrolides[0]}</option>
  <option value={Macrolides[1]}>{Macrolides[1]}</option>
</optgroup>
<optgroup label="Phenicols">
  <option value={Phenicols[0]}>{Phenicols[0]}</option>
  <option value={Phenicols[1]}>{Phenicols[1]}</option>
</optgroup>
<optgroup label="Polymyxins">
  <option value={Polymyxins[0]}>{Polymyxins[0]}</option>
  <option value={Polymyxins[1]}>{Polymyxins[1]}</option>
</optgroup>
<optgroup label="Fosfomycin">
  <option value={Fosfomycin[0]}>{Fosfomycin[0]}</option>
</optgroup>
<optgroup label="Tetracycline">
  <option value={Tetracycline[0]}>{Tetracycline[0]}</option>
  <option value={Tetracycline[1]}>{Tetracycline[1]}</option>
  <option value={Tetracycline[2]}>{Tetracycline[2]}</option>
  <option value={Tetracycline[3]}>{Tetracycline[3]}</option>
</optgroup>
</select>
</label>
  	)
}


export default SwitchAntibiotic;