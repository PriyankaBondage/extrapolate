
import BookComp from "./_Components/BookComp";
import FootComp from "./_Components/FootComp";
import Navbar from "./_Components/Navbar";
import ReportComp from "./_Components/ReportComp";
import ServiceComp from "./_Components/ServiceComp";

export default function Home() {
  return (
<div className="">

  <Navbar/>
  <BookComp/>
  <ServiceComp/>
  <ReportComp/>
  <FootComp/>
</div>
  );
}
