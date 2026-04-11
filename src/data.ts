type Emperor = {
  id: number;
  name: string;
  reign: string;
  period: string;
  achievements: string;
  description: string;
};

const romanEmperors: Emperor[] = [
    {
        id: 1,
        name: "Augustus",
        reign: "27 BC - 14 AD",
        period: "Julio-Claudian",
        achievements: "Founder of the Roman Empire, established Pax Romana",
        description: `Augustus, born Gaius Octavius, was the founder of the Roman Empire and its first emperor, ruling from 27 BCE to 14 CE. He rose to power after the assassination of his great-uncle Julius Caesar, forming the Second Triumvirate with Mark Antony and Lepidus to defeat Caesar's assassins. Eventually, Augustus emerged as the sole ruler after defeating Antony and Cleopatra at the Battle of Actium in 31 BCE.

Rather than presenting himself as a dictator, Augustus carefully maintained the outward appearance of the Roman Republic while consolidating power. He held multiple key offices and controlled the military, effectively making him the supreme authority. His reign ushered in the Pax Romana, a long period of relative peace and stability across the empire.

Augustus implemented significant reforms in administration, taxation, and the military, creating a professional standing army and a more efficient bureaucracy. He also promoted moral legislation and supported arts and literature.

His legacy is one of transformation—he turned a fractured republic into a stable imperial system that lasted for centuries.`
 
    },
    {
        id: 2,
        name: "Tiberius",
        reign: "14 - 37 AD",
        period: "Julio-Claudian",
        achievements: "Military consolidation, expansion of borders",
        description: `Tiberius, the second Roman emperor, ruled from 14 to 37 CE and was the adopted son of Augustus. A capable military commander before becoming emperor, he expanded Rome's influence in regions such as Germania and secured its frontiers.

Initially, Tiberius governed responsibly, maintaining the administrative systems established by Augustus and exercising fiscal restraint. However, his relationship with the Roman Senate deteriorated over time, marked by suspicion and political tension.

Much of the later part of his reign was influenced by his praetorian prefect, Sejanus, whose ambition and manipulation exacerbated political instability. After uncovering Sejanus's plot, Tiberius had him executed, but the atmosphere of distrust persisted.

Tiberius eventually withdrew from public life, ruling from Capri. His legacy remains complex and debated.`
    },
    {
        id: 3,
        name: "Caligula",
        reign: "37 - 41 AD",
        period: "Julio-Claudian",
        achievements: "Expanded imperial authority",
        description: `Caligula, born Gaius Julius Caesar Germanicus, ruled from 37 to 41 CE. Initially welcomed as the son of the popular general Germanicus, his early reign was marked by generosity and public spectacles.

After a severe illness, his behavior reportedly became erratic and increasingly autocratic. He is often remembered for extravagance, cruelty, and unpredictability, though some accounts may be exaggerated.

His rule strained Rome's finances and alienated the Senate. Ultimately, his governance led to his assassination in 41 CE by members of the Praetorian Guard.

Caligula's reign is often cited as an example of the dangers of unchecked imperial power.`
  
    },
    {
        id: 4,
        name: "Claudius",
        reign: "41 - 54 AD",
        period: "Julio-Claudian",
        achievements: "Invaded Britain, administrative reforms",
        description: `Claudius, who ruled from 41 to 54 CE, became emperor unexpectedly after Caligula's assassination. Previously overlooked, he proved to be an effective administrator.

One of Claudius's most notable achievements was the conquest of Britain in 43 CE. He also undertook major public works projects, improving infrastructure and trade.

Claudius reformed administration by relying more on imperial officials rather than the Senate, increasing efficiency but causing resentment.

Despite political challenges and a turbulent personal life, Claudius is now regarded as a competent ruler who strengthened the empire.`
  
    },
    {
        id: 5,
        name: "Nero",
        reign: "54 - 68 AD",
        period: "Julio-Claudian",
        achievements: "Cultural patronage",
        description: `Nero, the last emperor of the Julio-Claudian dynasty, ruled from 54 to 68 CE. He came to power young and was initially guided by advisors including Seneca.

Over time, Nero became increasingly focused on artistic pursuits, which drew criticism from Roman elites. His relationship with his mother deteriorated, culminating in her murder.

Nero is associated with the Great Fire of Rome in 64 CE. Though likely not responsible, he blamed Christians, leading to persecution.

His later rule saw heavy taxation, unrest, and rebellion. Facing capture, Nero committed suicide in 68 CE, ending the dynasty.`
  
    }
];

export default romanEmperors;