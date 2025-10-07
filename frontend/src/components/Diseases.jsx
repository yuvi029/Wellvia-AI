import React, { useState } from "react";

export default function Diseases({ isDarkMode }) {
  const [searchTerm, setSearchTerm] = useState("");

  const diseases = [
{ name: "Acne 🧴", description: "Clogged hair follicles causing pimples.", symptoms: "Pimples, blackheads, cysts" },
    { name: "AIDS/HIV 🧬", description: "Virus attacking immune system.", symptoms: "Weight loss, fever, fatigue" },
    { name: "Alzheimer's Disease 🧠", description: "Progressive memory loss and cognitive decline.", symptoms: "Memory loss, confusion, difficulty completing tasks" },
    { name: "Anemia 🩸", description: "Condition where you lack enough healthy red blood cells.", symptoms: "Fatigue, weakness, pale skin" },
    { name: "Angina ❤️", description: "Chest pain due to reduced blood flow to heart.", symptoms: "Chest pain, shortness of breath, fatigue" },
    { name: "Anxiety Disorder 😰", description: "Excessive worry and fear.", symptoms: "Restlessness, rapid heartbeat, tension" },
    { name: "Appendicitis 🩺", description: "Inflammation of the appendix.", symptoms: "Abdominal pain, nausea, fever" },
    { name: "Asthma 🌬️", description: "Respiratory condition with bronchial spasms.", symptoms: "Shortness of breath, chest tightness, coughing" },
    { name: "Atrial Fibrillation ❤️", description: "Irregular heart rhythm.", symptoms: "Palpitations, fatigue, dizziness" },
    { name: "Bacterial Vaginosis 🦠", description: "Overgrowth of harmful bacteria in the vagina.", symptoms: "Abnormal discharge, odor, itching" },
    { name: "Bipolar Disorder 🌗", description: "Extreme mood swings.", symptoms: "Mood swings, irritability, impulsivity" },
    { name: "Bladder Infection 💦", description: "Infection in the bladder.", symptoms: "Painful urination, urgency, cloudy urine" },
    { name: "Bronchitis 🌬️", description: "Inflammation of bronchial tubes.", symptoms: "Cough, mucus, fatigue, shortness of breath" },
    { name: "Cancer 🎗️", description: "Uncontrolled cell growth forming tumors.", symptoms: "Lump, unexplained weight loss, fatigue" },
    { name: "Chickenpox 🐣", description: "Highly contagious viral infection causing itchy rash.", symptoms: "Itchy rash, fever, fatigue" },
    { name: "Chronic Fatigue Syndrome 😴", description: "Persistent fatigue not relieved by rest.", symptoms: "Fatigue, sleep problems, memory issues" },
    { name: "Chronic Kidney Disease 🩺", description: "Long-term loss of kidney function.", symptoms: "Fatigue, swelling, nausea" },
    { name: "Cirrhosis 🩸", description: "Scarring of the liver tissue.", symptoms: "Fatigue, weakness, jaundice" },
    { name: "Common Cold 🤧", description: "Viral infection of the upper respiratory tract.", symptoms: "Sneezing, runny nose, congestion" },
    { name: "Conjunctivitis 👁️", description: "Inflammation of eye conjunctiva.", symptoms: "Red, itchy eyes, discharge" },
    { name: "COPD 🫁", description: "Chronic lung disease causing breathing difficulty.", symptoms: "Cough, wheezing, shortness of breath" },
    { name: "COVID-19 🦠", description: "An infectious disease caused by SARS-CoV-2 virus.", symptoms: "Fever, cough, shortness of breath, loss of taste/smell" },
    { name: "Cystitis 💦", description: "Bladder infection.", symptoms: "Painful urination, urgency, cloudy urine" },
    { name: "Dengue 🦟", description: "Mosquito-borne viral infection causing flu-like symptoms.", symptoms: "High fever, rash, severe headache, joint pain" },
    { name: "Depression 😔", description: "Persistent low mood and loss of interest.", symptoms: "Sadness, fatigue, sleep problems" },
    { name: "Diabetes 🍬", description: "Chronic condition affecting how the body turns food into energy.", symptoms: "Frequent urination, excessive thirst, fatigue" },
    { name: "Diphtheria 😷", description: "Bacterial infection affecting throat/nose.", symptoms: "Sore throat, fever, difficulty breathing" },
    { name: "Ebola 🩸", description: "Rare but severe viral illness causing bleeding and organ failure.", symptoms: "Fever, fatigue, vomiting, hemorrhage" },
    { name: "Epilepsy ⚡", description: "Neurological disorder causing seizures.", symptoms: "Seizures, confusion, staring spells" },
    { name: "Eczema 🌿", description: "Inflamed, itchy skin condition.", symptoms: "Red, itchy, dry skin" },
    { name: "Endometriosis 🌸", description: "Tissue grows outside the uterus.", symptoms: "Pelvic pain, heavy periods" },
    { name: "Encephalitis 🧠", description: "Inflammation of the brain.", symptoms: "Headache, fever, confusion" },
    { name: "Epilepsy ⚡", description: "Neurological disorder causing seizures.", symptoms: "Seizures, confusion, staring spells" },
    { name: "Fibromyalgia 💪", description: "Chronic widespread musculoskeletal pain.", symptoms: "Pain, fatigue, sleep problems" },
    { name: "Gallstones 🫛", description: "Hardened deposits in the gallbladder.", symptoms: "Abdominal pain, nausea, vomiting" },
    { name: "Gastritis 🍽️", description: "Inflammation of the stomach lining.", symptoms: "Nausea, vomiting, stomach pain" },
    { name: "Gout 💥", description: "Form of arthritis caused by uric acid crystals.", symptoms: "Severe joint pain, redness, swelling" },
    { name: "Hepatitis B 🩸", description: "Viral infection attacking the liver.", symptoms: "Fatigue, jaundice, abdominal pain" },
    { name: "Hepatitis C 🩸", description: "Liver infection caused by the hepatitis C virus.", symptoms: "Fatigue, joint pain, jaundice" },
    { name: "Hernia 🩺", description: "Bulging of an organ through its cavity wall.", symptoms: "Bulging lump, pain, weakness" },
    { name: "HIV/AIDS 🧬", description: "Virus attacking immune system.", symptoms: "Weight loss, fever, fatigue" },
    { name: "Hypertension 💓", description: "Condition where blood pressure is consistently high.", symptoms: "Headaches, dizziness, nosebleeds" },
    { name: "Hyperthyroidism ⚡", description: "Excess thyroid hormone production.", symptoms: "Weight loss, rapid heartbeat, nervousness" },
    { name: "Hypoglycemia 🍬", description: "Low blood sugar levels.", symptoms: "Shakiness, sweating, confusion" },
    { name: "Hypothyroidism ❄️", description: "Underactive thyroid gland.", symptoms: "Fatigue, weight gain, cold intolerance" },
    { name: "Influenza (Flu) 🤧", description: "Contagious respiratory illness caused by influenza viruses.", symptoms: "Fever, chills, cough, body aches" },
    { name: "Irritable Bowel Syndrome 💩", description: "Disorder of large intestine.", symptoms: "Cramping, bloating, diarrhea/constipation" },
    { name: "Kidney Stones 💎", description: "Hard deposits in kidneys causing pain.", symptoms: "Severe pain, blood in urine" },
    { name: "Leukemia 🩸", description: "Cancer of blood-forming tissues.", symptoms: "Fatigue, frequent infections, weight loss" },
    { name: "Lung Cancer 🫁", description: "Malignant tumor in lungs.", symptoms: "Cough, weight loss, chest pain" },
    { name: "Malaria 🦟", description: "Disease caused by a parasite transmitted by mosquitoes.", symptoms: "Fever, chills, sweating, nausea" },
    { name: "Measles 🌡️", description: "Viral infection causing total-body rash and flu-like symptoms.", symptoms: "Rash, fever, cough, runny nose" },
    { name: "Meningitis 🧠", description: "Inflammation of the protective membranes covering the brain and spinal cord.", symptoms: "Fever, headache, stiff neck" },
    { name: "Migraine 🤯", description: "Neurological condition causing severe headaches.", symptoms: "Severe headache, nausea, sensitivity to light/sound" },
    { name: "Multiple Sclerosis 🧬", description: "Chronic disease affecting brain and spinal cord.", symptoms: "Fatigue, vision problems, numbness" },
    { name: "Osteoarthritis 🦴", description: "Degenerative joint disease causing pain and stiffness.", symptoms: "Joint pain, swelling, stiffness" },
    { name: "Osteoporosis 🦴", description: "Decreased bone strength increases fracture risk.", symptoms: "Back pain, loss of height, fractures" },
    { name: "Parkinson's Disease 🧠", description: "Nervous system disorder affecting movement.", symptoms: "Tremors, stiffness, slow movement" },
    { name: "Peptic Ulcer 🩹", description: "Open sores in the lining of stomach or intestines.", symptoms: "Abdominal pain, bloating, nausea" },
    { name: "Pneumonia 🫁", description: "Lung infection inflaming air sacs.", symptoms: "Cough with phlegm, fever, chills" },
    { name: "Quadriplegia 🦾", description: "Paralysis of all four limbs due to spinal cord injury.", symptoms: "Loss of movement, loss of sensation, muscle spasms" },
    { name: "Rabies 🐕", description: "Viral disease affecting nervous system, usually from animal bites.", symptoms: "Fever, agitation, hydrophobia" },
    { name: "Rheumatoid Arthritis 🤲", description: "Chronic autoimmune disorder affecting joints.", symptoms: "Joint pain, swelling, stiffness" },
    { name: "Scoliosis 🧍‍♂️", description: "Sideways curvature of the spine.", symptoms: "Uneven shoulders, back pain, posture changes" },
    { name: "Shingles 🌡️", description: "Viral infection causing painful rash.", symptoms: "Pain, blistering rash, itching" },
    { name: "Skin Cancer 🌞", description: "Cancer in skin cells, often caused by UV exposure.", symptoms: "New mole, changes in existing mole, sore that doesn't heal" },
    { name: "Sleep Apnea 😴", description: "Disrupted breathing during sleep.", symptoms: "Snoring, daytime sleepiness, morning headaches" },
    { name: "Stroke 🧠", description: "Blood supply to part of your brain is interrupted.", symptoms: "Sudden numbness, confusion, trouble speaking" },
    { name: "Tuberculosis 🫁", description: "Infectious disease that mainly affects the lungs.", symptoms: "Coughing blood, fever, night sweats" },
    { name: "Ulcerative Colitis 🌱", description: "Inflammation of the colon and rectum.", symptoms: "Diarrhea, abdominal pain, blood in stool" },
    { name: "Urinary Tract Infection 💦", description: "Infection in any part of the urinary system.", symptoms: "Painful urination, frequent urge to urinate, cloudy urine" },
    { name: "Varicella (Chickenpox) 🐣", description: "Highly contagious viral infection causing itchy rash.", symptoms: "Itchy rash, fever, fatigue" },
    { name: "Vertigo 🌪️", description: "Spinning sensation caused by inner ear issues.", symptoms: "Dizziness, balance problems, nausea" },
    { name: "Viral Hepatitis 🩸", description: "Inflammation of the liver caused by viruses.", symptoms: "Fatigue, jaundice, abdominal pain" },
    { name: "Whooping Cough 🫁", description: "Bacterial respiratory infection causing severe coughing fits.", symptoms: "Coughing, vomiting after cough, exhaustion" },
    { name: "Wound Infection 🩹", description: "Infection at the site of a wound.", symptoms: "Redness, swelling, pus, pain" },
    { name: "Xerophthalmia 👁️", description: "Severe dry eye condition caused by vitamin A deficiency.", symptoms: "Dry eyes, night blindness, eye irritation" },
    { name: "Yaws 🦠", description: "Chronic bacterial infection affecting skin, bones, and joints.", symptoms: "Skin lesions, joint pain, bone deformities" },
    { name: "Zika Virus 🦟", description: "Mosquito-borne virus causing fever, rash, and joint pain.", symptoms: "Fever, rash, joint pain, red eyes" },
    { name: "Acromegaly 🦴", description: "Hormonal disorder causing enlarged bones.", symptoms: "Enlarged hands/feet, facial changes, joint pain" },
{ name: "Actinic Keratosis 🌞", description: "Rough, scaly patch on skin caused by sun exposure.", symptoms: "Scaly spots, itching, redness" },
{ name: "Addison's Disease ⚡", description: "Adrenal glands produce insufficient hormones.", symptoms: "Fatigue, weight loss, low blood pressure" },
{ name: "Atrial Septal Defect ❤️", description: "Heart defect causing hole in heart septum.", symptoms: "Shortness of breath, fatigue, palpitations" },
{ name: "Atherosclerosis 💓", description: "Plaque buildup in arteries reducing blood flow.", symptoms: "Chest pain, numbness, fatigue" },
{ name: "Amyotrophic Lateral Sclerosis 🧠", description: "Progressive nervous system disease affecting muscles.", symptoms: "Muscle weakness, twitching, difficulty speaking" },
{ name: "Ankylosing Spondylitis 🦴", description: "Inflammatory arthritis affecting spine and joints.", symptoms: "Back pain, stiffness, limited mobility" },
{ name: "Bell’s Palsy 😶", description: "Sudden weakness in facial muscles.", symptoms: "Facial droop, difficulty closing eye, drooling" },
{ name: "Benign Prostatic Hyperplasia ⚽", description: "Enlarged prostate causing urinary issues.", symptoms: "Frequent urination, weak urine stream, urgency" },
{ name: "Barrett’s Esophagus 🔥", description: "Condition where esophagus lining changes due to acid reflux.", symptoms: "Heartburn, difficulty swallowing, chest pain" },
{ name: "Brucellosis 🐄", description: "Bacterial infection from animals or animal products.", symptoms: "Fever, fatigue, muscle pain" },
{ name: "Buerger’s Disease 🦵", description: "Inflammation and clotting in small/medium arteries.", symptoms: "Pain in limbs, ulcers, numbness" },
{ name: "Candidiasis 🍄", description: "Fungal infection affecting skin/mucous membranes.", symptoms: "Itching, redness, white patches" },
{ name: "Carpal Tunnel Syndrome 🤚", description: "Nerve compression in wrist causing pain.", symptoms: "Tingling, numbness, weakness in hand" },
{ name: "Cataracts 👁️", description: "Clouding of eye lens causing vision loss.", symptoms: "Blurry vision, faded colors, glare" },
{ name: "Cholera 💧", description: "Bacterial infection causing severe diarrhea.", symptoms: "Diarrhea, dehydration, vomiting" },
{ name: "Cirrhosis 🩸", description: "Scarring of liver tissue.", symptoms: "Fatigue, jaundice, swelling" },
{ name: "Clostridium Difficile Infection 🦠", description: "Bacterial infection of the colon.", symptoms: "Diarrhea, fever, abdominal pain" },
{ name: "Creutzfeldt-Jakob Disease 🧠", description: "Rare brain disorder causing rapid degeneration.", symptoms: "Memory loss, coordination problems, behavioral changes" },
{ name: "Crohn's Disease 🌱", description: "Chronic inflammatory bowel disease.", symptoms: "Abdominal pain, diarrhea, weight loss, fatigue" },
{ name: "Cushing's Syndrome ⚖️", description: "High cortisol levels causing weight gain and skin changes.", symptoms: "Weight gain, rounded face, high blood pressure" },
{ name: "Cystic Fibrosis 🌬️", description: "Genetic disorder affecting lungs and digestive system.", symptoms: "Persistent cough, lung infections, poor growth" },
{ name: "Dermatitis 🌿", description: "Inflammation of the skin.", symptoms: "Redness, itching, rash" },
{ name: "Diabetic Neuropathy 🍬", description: "Nerve damage due to high blood sugar.", symptoms: "Numbness, tingling, pain in limbs" },
{ name: "Diverticulitis 💥", description: "Inflammation of colon pouches.", symptoms: "Abdominal pain, fever, nausea" },
{ name: "Down Syndrome 🧬", description: "Genetic disorder caused by extra chromosome 21.", symptoms: "Intellectual disability, distinct facial features, developmental delays" },
{ name: "Dyslexia 📚", description: "Learning disorder affecting reading skills.", symptoms: "Difficulty reading, spelling mistakes, slow reading" },
{ name: "Ehlers-Danlos Syndrome 🦴", description: "Group of disorders affecting connective tissue.", symptoms: "Hyperflexible joints, stretchy skin, fragile tissues" },
{ name: "Emphysema 🫁", description: "Lung condition causing shortness of breath.", symptoms: "Breathlessness, chronic cough, fatigue" },
{ name: "Endocarditis ❤️", description: "Infection of heart valves or lining.", symptoms: "Fever, heart murmur, fatigue" },
{ name: "Encephalopathy 🧠", description: "Brain disease altering structure or function.", symptoms: "Confusion, memory problems, seizures" },
{ name: "Epistaxis 👃", description: "Nosebleeds.", symptoms: "Bleeding from nose, dizziness" },
{ name: "Erythema Multiforme 🌸", description: "Skin reaction to infections or drugs.", symptoms: "Rash, target-like lesions, itching" },
{ name: "Esophageal Cancer 🔥", description: "Malignant tumor in esophagus.", symptoms: "Difficulty swallowing, weight loss, chest pain" },

  ]

  const filteredDiseases = diseases.filter((disease) =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`min-h-screen transition-all py-16 px-6 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-10">Common Diseases</h1>

        <input
          type="text"
          placeholder="🔍 Search disease..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full max-w-lg p-4 rounded-xl mb-16 border focus:outline-none shadow-md text-lg ${
            isDarkMode ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" : "bg-white border-gray-300 placeholder-gray-500"
          }`}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredDiseases.map((disease, index) => (
            <div
              key={index}
              className={`p-6 rounded-3xl shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600"
                  : "bg-gradient-to-br from-white to-teal-50 hover:from-teal-50 hover:to-white"
              }`}
            >
              <h2 className="text-2xl font-bold mb-3">{disease.name}</h2>
              <p className="text-md mb-3">{disease.description}</p>
              <p className="text-md font-semibold">
                <span className="text-teal-500">Symptoms:</span> {disease.symptoms}
              </p>
            </div>
          ))}
        </div>

        {filteredDiseases.length === 0 && (
          <p className="mt-16 text-gray-400 text-lg">No diseases found.</p>
        )}
      </div>
    </div>
  );
}
