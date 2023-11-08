const NoDataFound = () => {
  return (
    <div className=" space-y-3 text-center px-6 lg:px-8 dark:text-white py-20 dark:bg-gray-800">
      <h2 className="font-bold text-6xl text-job-primary">Oops!</h2>
      <h2 className="text-xl font-bold">
        It seems there is no data available at the moment.
      </h2>
      <h3 className="text-lg font-medium">Please check back later.</h3>
    </div>
  );
};

export default NoDataFound;
