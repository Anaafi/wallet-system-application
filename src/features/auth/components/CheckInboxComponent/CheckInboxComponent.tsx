import CheckInboxImage from '../../../../assets/check-inbox.png';
export function CheckInboxComponent() {
  return (
    <div className="bg-white py-10 px-8 border rounded-lg max-w-[528px] w-full flex flex-col gap-6">
      <div className="flex flex-col gap-[60px]">
        <div className=" flex justify-center pt-[18px]">
          <img src={CheckInboxImage} />
        </div>
        <div className="flex flex-col justify-center text-center gap-4 pb-[18px]">
          <h1 className="text-[32px] font-bold">Check Your Inbox</h1>
          <p>Password reset link has been sent to your inbox</p>
        </div>
      </div>
    </div>
  );
}
