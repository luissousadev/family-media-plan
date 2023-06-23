import FamilyMember from "./familyMember";

class Family {
    constructor(familyName) {
      this.familyName = familyName;
      this.familyMembers = [];
      this.hasMediaBalance = true;
      this.hasCommunicatingAboutMedia = true;
      this.hasKindnessEmpathy = true;
      this.hasDigitalPrivacySafety = true;
      this.hasScreenFreeZones = true;
      this.hasScreenFreeTimes = true;
      this.hasChosingGoodContent = true;
      this.hasUsingMediaTogether = true;
    }
  
    addFamilyMember(id, nameMember, age) {
      const member = new FamilyMember(id, nameMember, age);
      this.familyMembers.push(member);
    }
  }
  
  export default Family;