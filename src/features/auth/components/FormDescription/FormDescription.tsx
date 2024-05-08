interface DescriptionProps {
  title: string;
  value: string;
}

export function FormDescription({ title, value }: DescriptionProps) {
  return (
    <div className="flex flex-col gap-2  md:gap-6">
      {/* <h1 className="text-3xl md:text-[46px] font-bold">Create Your Account</h1>
      <p className="text-gray-100  text-xl md:text-3xl font-medium">
        Let's get you started
      </p> */}
      <div className="text-3xl md:text-[46px] font-bold">{title}</div>
      <div className="text-gray-100  text-xl md:text-3xl font-medium">
        {value}
      </div>
    </div>
  );
}
