import { useState } from 'react';
import { Form } from 'react-bootstrap';

const antibiotics = [
    {
        class: 'Aminoglycosides',
        drugs: ['Amikacin', 'Gentamicin', 'Tobramycin']
    },
    {
        class: 'Beta-lactams',
        drugs: ['Amoxicillin-clavulanate', 'Ampicillin', 'Ampicillin-sulbactam', 'Cefazolin', 'Cefepime', 'Cefotaxime', 'Cefoxitin', 'Ceftriaxone', 'Cefuroxime', 'Piperacillin-tazobactam', 'Imipenem', 'Meropenem', 'Oxacillin', 'Penicillin']
    },
    {
        class: 'Carbapenems',
        drugs: ['Doripenem', 'Ertapenem', 'Imipenem', 'Meropenem']
    },
    {
        class: 'Macrolides',
        drugs: ['Azithromycin', 'Clarithromycin', 'Erythromycin']
    },
    {
        class: 'Nitrofurans',
        drugs: ['Nitrofurantoin']
    },
    {
        class: 'Oxazolidinones',
        drugs: ['Linezolid']
    },
    {
        class: 'Penicillins',
        drugs: ['Amoxicillin-clavulanate', 'Ampicillin', 'Ampicillin-sulbactam', 'Penicillin']
    },
    {
        class: 'Phosphonic acids',
        drugs: ['Fosfomycin']
    },
    {
        class: 'Polymyxins',
        drugs: ['Colistin', 'Polymyxin B']
    },
    {
        class: 'Quinolones',
        drugs: ['Ciprofloxacin', 'Levofloxacin', 'Moxifloxacin']
    },
    {
        class: 'Tetracyclines',
        drugs: ['Minocycline', 'Tetracycline']
    },
    {
        class: 'Other',
        drugs: ['Clindamycin', 'Daptomycin', 'Metronidazole', 'Rifampin', 'Trimethoprim-sulfamethoxazole', 'Tigecycline', 'Vancomycin']
    }
];

function CheckboxForm() {
    const [selectedAntibiotics, setSelectedAntibiotics] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedAntibiotics([...selectedAntibiotics, value]);
        } else {
            setSelectedAntibiotics(selectedAntibiotics.filter((drug) => drug !== value));
        }
    };

    return (
        <Form>
            {antibiotics.map((antibiotic) => (
                <fieldset key={antibiotic.class}>
                    <Form.Group>
                        <Form.Label as="legend">{antibiotic.class}</Form.Label>
                        {antibiotic.drugs.map((drug) => (
                            <Form.Check
                                key={drug}
                                type="checkbox"
                                label={drug}
                                name={drug}
                                value={drug}
                                checked={selectedAntibiotics.includes(drug)}
                                onChange={handleCheckboxChange}
                            />
                        ))}
                    </Form.Group>
                </fieldset>
            ))}
        </Form>
    );
}

export default CheckboxForm;