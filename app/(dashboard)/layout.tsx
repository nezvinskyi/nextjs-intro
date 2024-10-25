import NewTodoForm from "@/components/NewTodoForm";

const DashboardLayout = ({ children }) => {
  return (
	<div className='container mx-auto'>
	  <div>New Todo</div>
	  <div className="">
		<NewTodoForm />
	  </div>
	  {children}
	</div>
  );
}

export default DashboardLayout;