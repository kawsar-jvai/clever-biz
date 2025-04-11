import { CurveSvg } from "../../components/icons";

const ScreenStaffDashboard = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-x-3">
        {/* Card 1 */}
        <div className="flex-1 bg-sidebar shadow-md shadow-blac/70 flex flex-col items-start p-6 rounded-xl relative">
          <p className="text-[#31BB24] text-lg">Available items</p>
          <p className="text-3xl text-primary-text font-medium">100</p>
          <p className="text-lg text-primary-text/30 font-light mt-4">Total</p>
          <div className="absolute bottom-0 right-0 flex justify-end items-end">
            <CurveSvg
              strokeColor="#31BB24"
              startColor="#48E03A"
              endColor="#161F42"
            />
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex-1 bg-sidebar shadow-md shadow-blac/70 flex flex-col items-start p-6 rounded-xl relative">
          <p className="text-[#FFB056] text-lg">Processing Order</p>
          <p className="text-3xl text-primary-text font-medium">30</p>
          <p className="text-lg text-primary-text/30 font-light mt-4">Total</p>
          <div className="absolute bottom-0 right-0 flex justify-end items-end">
            <CurveSvg
              strokeColor="#FFB056"
              startColor="#FFB056"
              endColor="#161F42"
            />
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex-1 bg-sidebar shadow-md shadow-blac/70 flex flex-col items-start p-6 rounded-xl relative">
          <p className="text-[#FF6561] text-lg">Pending Order</p>
          <p className="text-3xl text-primary-text font-medium">12</p>
          <p className="text-lg text-primary-text/30 font-light mt-4">Total</p>
          <div className="absolute bottom-0 right-0 flex justify-end items-end">
            <CurveSvg
              strokeColor="#FF6561"
              startColor="#EB342E"
              endColor="#161F42"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenStaffDashboard;
