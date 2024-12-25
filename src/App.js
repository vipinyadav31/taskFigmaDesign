import CoreFeatures from "./Component/CoreFeature";
import HeaderSection from "./Component/HeaderSection";
import SecondSection from "./Component/SecondSection";
import QualityList from "./Component/QualityList";
import Working from "./Component/Working";
import Plans from "./Component/Plans";
import TutorialSection from "./Component/TutorialSection";
import QuestionSection from "./Component/QuestionSection";
import Footer from "./Component/Footer";
function App() {
  return (
    <div className="App">
      <HeaderSection />
      <SecondSection />
      <CoreFeatures />
      <QualityList />
      <Working />
      <Plans />
      <TutorialSection />
      <QuestionSection />
      <Footer />
    </div>
  );
}

export default App;
