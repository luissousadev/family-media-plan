import { createContext, useState, useEffect, useContext } from "react";
import Family from "../entities/family";
import { Storage } from "../component/utils/Storage";

export const FamilyContext = createContext({});

export const useFamily = () => useContext(FamilyContext);

const generateId = () => Math.random() * 10_000_000;

export function FamilyContextProvider({ children }) {
  const [family, setFamily] = useState({});
  const [members, setMembers] = useState([
    { id: generateId() },
    { id: generateId() },
  ]);
  const [activeStep, setActiveStep] = useState(2);

  const [idMembers, setIdMembers] = useState(1);
  const [countFamilyMembersComponent, setCountFamilyMembersComponent] =
    useState([{ id: generateId() }, { id: generateId() }]);
  const [isDisableNextButton, setIsDisableNextButton] = useState(false);

  const datas = [
    {
      stepper: "mediaBalance",
      text: [
        "Planning a screen-free activity to do together as a family every day.",
        "Tracking online activities and talking about which activities may be taking up too much time.",
        "Making a habit of turning off media that’s not being used by anyone.",
        "Participating in other activities available in our community.",
        "Having fewer apps on our devices.",
        "Setting lock-screen reminders.",
        "Filling our child's days with more play than media.",
        "Setting media time limits.",
        "Making sure screen time doesn't interfere with physical activity and healthy eating.",
        "Preventing unhealthy video gaming habits.",
        "Realizing when we turn to media to dull our own emotions, and finding healthier ways to cope.",
      ],
    },
    {
      stepper: "communicatingAboutMedia",
      text: [
        "Planning a screen-free activity to do together as a family every day.",
        "Tracking online activities and talking about which activities may be taking up too much time.",
        "Making a habit of turning off media that’s not being used by anyone.",
        "Participating in other activities available in our community.",
        "Having fewer apps on our devices.",
        "Setting lock-screen reminders.",
        "Filling our child's days with more play than media.",
        "Setting media time limits.",
        "Making sure screen time doesn't interfere with physical activity and healthy eating.",
        "Preventing unhealthy video gaming habits.",
        "Realizing when we turn to media to dull our own emotions, and finding healthier ways to cope.",
      ],
    },
    {
      stepper: "kindnessEmpathy",
      text: [
        "Planning a screen-free activity to do together as a family every day.",
        "Tracking online activities and talking about which activities may be taking up too much time.",
        "Making a habit of turning off media that’s not being used by anyone.",
        "Participating in other activities available in our community.",
        "Having fewer apps on our devices.",
        "Setting lock-screen reminders.",
        "Filling our child's days with more play than media.",
        "Setting media time limits.",
        "Making sure screen time doesn't interfere with physical activity and healthy eating.",
        "Preventing unhealthy video gaming habits.",
        "Realizing when we turn to media to dull our own emotions, and finding healthier ways to cope.",
      ],
    },
    {
      stepper: "digitalPrivacySafety",
      text: [
        "Planning a screen-free activity to do together as a family every day.",
        "Tracking online activities and talking about which activities may be taking up too much time.",
        "Making a habit of turning off media that’s not being used by anyone.",
        "Participating in other activities available in our community.",
        "Having fewer apps on our devices.",
        "Setting lock-screen reminders.",
        "Filling our child's days with more play than media.",
        "Setting media time limits.",
        "Making sure screen time doesn't interfere with physical activity and healthy eating.",
        "Preventing unhealthy video gaming habits.",
        "Realizing when we turn to media to dull our own emotions, and finding healthier ways to cope.",
      ],
    },
    {
      stepper: "screenFreeZones",
      text: [
        "Planning a screen-free activity to do together as a family every day.",
        "Tracking online activities and talking about which activities may be taking up too much time.",
        "Making a habit of turning off media that’s not being used by anyone.",
        "Participating in other activities available in our community.",
        "Having fewer apps on our devices.",
        "Setting lock-screen reminders.",
        "Filling our child's days with more play than media.",
        "Setting media time limits.",
        "Making sure screen time doesn't interfere with physical activity and healthy eating.",
        "Preventing unhealthy video gaming habits.",
        "Realizing when we turn to media to dull our own emotions, and finding healthier ways to cope.",
      ],
    },
    {
      stepper: "screenFreeTimes",
      text: [
        "Planning a screen-free activity to do together as a family every day.",
        "Tracking online activities and talking about which activities may be taking up too much time.",
        "Making a habit of turning off media that’s not being used by anyone.",
        "Participating in other activities available in our community.",
        "Having fewer apps on our devices.",
        "Setting lock-screen reminders.",
        "Filling our child's days with more play than media.",
        "Setting media time limits.",
        "Making sure screen time doesn't interfere with physical activity and healthy eating.",
        "Preventing unhealthy video gaming habits.",
        "Realizing when we turn to media to dull our own emotions, and finding healthier ways to cope.",
      ],
    },
    {
      stepper: "chosingGoodContent",
      text: [
        "Planning a screen-free activity to do together as a family every day.",
        "Tracking online activities and talking about which activities may be taking up too much time.",
        "Making a habit of turning off media that’s not being used by anyone.",
        "Participating in other activities available in our community.",
        "Having fewer apps on our devices.",
        "Setting lock-screen reminders.",
        "Filling our child's days with more play than media.",
        "Setting media time limits.",
        "Making sure screen time doesn't interfere with physical activity and healthy eating.",
        "Preventing unhealthy video gaming habits.",
        "Realizing when we turn to media to dull our own emotions, and finding healthier ways to cope.",
      ],
    },
    {
      stepper: "usingMediaTogether",
      text: [
        "Planning a screen-free activity to do together as a family every day.",
        "Tracking online activities and talking about which activities may be taking up too much time.",
        "Making a habit of turning off media that’s not being used by anyone.",
        "Participating in other activities available in our community.",
        "Having fewer apps on our devices.",
        "Setting lock-screen reminders.",
        "Filling our child's days with more play than media.",
        "Setting media time limits.",
        "Making sure screen time doesn't interfere with physical activity and healthy eating.",
        "Preventing unhealthy video gaming habits.",
        "Realizing when we turn to media to dull our own emotions, and finding healthier ways to cope.",
      ],
    },
  ];

  const createFamily = (nameFamily) => {
    const familyModel = new Family(nameFamily);
    setFamily(familyModel);
    console.log(family);
  };

  const hasThisFamilyMember = (id) => {
    return members.some((member) => member.id === id);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const setLocalStorage = (data) => {
    if (data) {
      Storage.set("family", data);
    }
  };

  const getLocalStorage = () => {
    const family = Storage.get("family");
    if (family) {
      setFamily(family);

      const updatedMembers = family.familyMembers.map((member) => member);
      if (updatedMembers) setMembers(updatedMembers);
    }
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <FamilyContext.Provider
      value={{
        family,
        members,
        idMembers,
        countFamilyMembersComponent,
        isDisableNextButton,
        datas,
        activeStep,
        setIsDisableNextButton,
        setMembers,
        setFamily,
        createFamily,
        hasThisFamilyMember,
        setIdMembers,
        setCountFamilyMembersComponent,
        generateId,
        handleNext,
        handleBack,
        setActiveStep,
        setLocalStorage,
      }}
    >
      {children}
    </FamilyContext.Provider>
  );
}
