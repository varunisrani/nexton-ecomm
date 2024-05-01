import Input from "./Input";

export default function Csec1() {
  return (
    <div className="flex flex-col ml-[2rem] mt-[3rem]">
      <h1 className="text-3xl font-semibold">Chekout</h1>
      <h1 className="text-[1rem] ml-[0.1rem] mt-3 ">Homepage / Checkout</h1>
      <div className="flex flex-col w-[40rem] h-[10rem] border border-brdc rounded-2xl mt-[3rem]">
        <h1 className="text-[0.8rem] text-black/90 ml-5 mt-6">CONTACT INFO</h1>
        <div className="border border-b-brdc w-[40rem] h-0 mt-[1rem]"></div>
        <div className="flex flex-row">
          <Input label="Your phone number" />
          <Input label="Email address" type="email" />
        </div>
      </div>
      <div className="flex flex-col w-[40rem] h-[33rem] border border-brdc rounded-2xl mt-[3rem]">
        <h1 className="text-[0.8rem] text-black/90 ml-5 mt-6">
          SHIPPING ADDRESS
        </h1>
        <div className="border border-b-brdc w-[40rem] h-0 mt-[1rem]"></div>
        <div className="flex flex-row">
          <Input label="First name" />
          <Input label="Last name" />
        </div>
        <div className="flex flex-row mt-4">
          <div className="flex flex-col mt-2 ml-5">
            <h1 className="text-1rem mb-2 font-medium">Address line 1</h1>
            <div
              type="text"
              className={`h-[2.3rem] w-[22rem] rounded-xl border border-1 border-brdc text-[1rem] font-normal`}
            >
              <input className="h-[2.1rem] w-[16rem] ml-4 text-[0.9rem] focus:outline-none " />
            </div>
          </div>
          <div className="flex flex-col mt-2 ml-5">
            <h1 className="text-1rem mb-2 font-medium">Apt, Suite</h1>
            <div
              type="text"
              className={`h-[2.3rem] w-[14rem] rounded-xl border border-1 border-brdc text-[1rem] font-normal`}
            >
              <input className="h-[2.1rem] w-[12rem] ml-4 text-[0.9rem] focus:outline-none " />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col mt-4 ml-5">
            <h1 className="text-1rem mb-2 font-medium">Address line 2</h1>
            <div
              type="text"
              className={`h-[2.3rem] w-[37.3rem] rounded-xl border border-1 border-brdc text-[1rem] font-normal`}
            >
              <input className="h-[2.1rem] w-[16rem] ml-4 text-[0.9rem] focus:outline-none " />
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-3">
          <Input label="City" />
          <Input label="Country" />
        </div>
        <div className="flex flex-row mt-3">
          <Input label="State/Province" />
          <Input label="Postal code" />
        </div>
      </div>
      <div className="flex flex-col w-[40rem] h-[22rem] border border-brdc rounded-2xl mt-[3rem]">
        <h1 className="text-[0.8rem] text-black/90 ml-5 mt-6">PAYMENT</h1>
        <div className="border border-b-brdc w-[40rem] h-0 mt-[1rem]"></div>

        <div className="flex flex-row">
          <div className="flex flex-col mt-4 ml-5">
            <h1 className="text-1rem mb-2 font-medium">Card number</h1>
            <div
              type="text"
              className={`h-[2.3rem] w-[37.3rem] rounded-xl border border-1 border-brdc text-[1rem] font-normal`}
            >
              <input className="h-[2.1rem] w-[16rem] ml-4 text-[0.9rem] focus:outline-none " />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col mt-4 ml-5">
            <h1 className="text-1rem mb-2 font-medium">Name on the card</h1>
            <div
              type="text"
              className={`h-[2.3rem] w-[37.3rem] rounded-xl border border-1 border-brdc text-[1rem] font-normal`}
            >
              <input className="h-[2.1rem] w-[16rem] ml-4 text-[0.9rem] focus:outline-none " />
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-4">
          <div className="flex flex-col mt-2 ml-5">
            <h1 className="text-1rem mb-2 font-medium">
              Expiration date (MM/YY)
            </h1>
            <div
              type="text"
              className={`h-[2.3rem] w-[22rem] rounded-xl border border-1 border-brdc text-[1rem] font-normal`}
            >
              <input className="h-[2.1rem] w-[16rem] ml-4 text-[0.9rem] focus:outline-none " />
            </div>
          </div>
          <div className="flex flex-col mt-2 ml-5">
            <h1 className="text-1rem mb-2 font-medium">CVC</h1>
            <div
              type="text"
              className={`h-[2.3rem] w-[14rem] rounded-xl border border-1 border-brdc text-[1rem] font-normal`}
            >
              <input className="h-[2.1rem] w-[12rem] ml-4 text-[0.9rem] focus:outline-none " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
