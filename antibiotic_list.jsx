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
"Amoxicilin-clavulanato",
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

const Phospomycins = [
"Fosfomycin"
];

const Tetracycline = [
"Doxycicline",
"Oxitetracicline",
"Minocycline",
"Tetracycline"
];

const tetraclass = {Name: Tetracycline, Abbr:["DOX", "OXI","MIN","TET"]}

import Form from 'react-bootstrap/Form';

function SwitchAntibiotic() {
  return (
    <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Check this switch"
      />
      <Form.Check 
        disabled
        type="switch"
        label="disabled switch"
        id="disabled-custom-switch"
      />
    </Form>
  );
}

export default SwitchAntibiotic;