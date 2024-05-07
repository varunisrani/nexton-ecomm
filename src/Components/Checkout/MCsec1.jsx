import Input from "./Input";
import Miniinput from "./Miniinput";

export default function MCsec1() {
  return (
    <div className="mmain">
      <h1 className="text-[1.4rem] font-semibold mt-5">Shipping details</h1>
      <div className="flex flex-col w-full h-[17rem] border border-brdc rounded-2xl mt-[3rem]">
        <h1 className="text-[0.8rem] text-black/90 ml-5 mt-6">CONTACT INFO</h1>
        <div className="border border-b-brdc w- h-0 mt-[1rem]"></div>
        <div className="flex flex-col mt-3 gap-2">
          <Input label="Your phone number" />
          <Input label="Email address" type="email" />
        </div>
      </div>
      <div className="flex flex-col w-full h-[33rem] border border-brdc rounded-2xl mt-[3rem]">
        <h1 className="text-[0.8rem] text-black/90 ml-5 mt-6">
          SHIPPING ADDRESS
        </h1>
        <div className="border border-b-brdc w-full h-0 mt-[1rem]"></div>
        <div className="flex flex-col mt-3 gap-2">
          <div className="flex flex-row">
            <Miniinput label="First name" />
            <Miniinput label="Last name" />
          </div>
          <Input label="Address line 1" />
          <Input label="Apt, Suite" />
          <div className="flex flex-row">
            <Miniinput label="City" />
            <Miniinput label="Country" />
          </div>
          <div className="flex flex-row">
            <Miniinput label="State/Province" />
            <Miniinput label="Postal code" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-[22rem] border border-brdc rounded-2xl mt-[3rem]">
        <h1 className="text-[0.8rem] text-black/90 ml-5 mt-6">PAYMENT</h1>
        <div className="border border-b-brdc w-full h-0 mt-[1rem]"></div>
        <div className="flex flex-col mt-3 gap-2">
          <Input label="Card number" />
          <Input label="Name on the card" />
          <div className="flex flex-row">
            <Miniinput label="Expiration date" />
            <Miniinput label="CVC" />
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <h1 className="text-[1.4rem] font-semibold mt-10">
          Confirm your order
        </h1>
        <div className="flex flex-row mt-5 justify-between">
          <h1 className="mtext">Subtotal</h1>
          <h1 className="mtext ">$169.99</h1>
        </div>
        <div className="flex flex-row mt-2 justify-between">
          <h1 className="mtext">Shipping estimate</h1>
          <h1 className="mtext ">$5.00</h1>
        </div>
        <div className="flex flex-row mt-2 justify-between">
          <h1 className="mtext">Tax estimate</h1>
          <h1 className="mtext ">$24.90</h1>
        </div>
        <div className="flex flex-row mt-5 justify-between">
          <h1 className="text-[1.1rem] text-black font-semibold">
            Order total
          </h1>
          <h1 className="mtext ">$199.89</h1>
        </div>
        <button className="confirmbutton">Confirm order</button>
      </div>
    </div>
  );
}
