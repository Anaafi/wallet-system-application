import { CheckInboxComponent, FormDescription } from '../../components';

export function CheckInbox() {
  return (
    <div className="flex flex-col gap-9 md:flex-row justify-between lg:gap-12 ">
      <div className="md:pt-12 w-full">
        <FormDescription
          title="Reset Password"
          value="We have sent a reset link to your registered email address"
        />
      </div>
      <div className="w-full flex justify-end">
        <CheckInboxComponent />
      </div>
    </div>
  );
}
