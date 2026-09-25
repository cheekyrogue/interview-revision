import JSdata from "../JSdata";
import ReactData from "../ReactData";

const QuestionsAndAnswers = () => {
	return (
		<div>
			{/* JS */}
			<div className="flex flex-col items-center space-y-4 max-w-2xl mx-auto mt-12 tracking-wider">
				<h1 className="uppercase text-4xl">JS Revision</h1>
				<div>
					{JSdata && JSdata.length > 0 ? (
						JSdata.map((dataItem) => (
							<div key={dataItem.id} className="flex flex-col space-y-2">
								<div className="flex space-x-3 text-2xl text-center text-yellow-500 mx-auto">
									<h3>{dataItem.id}.</h3>
									<p>{dataItem.question}</p>
								</div>
								<div className="text-xl text-center border-b border-pink-900 pb-5">
									<p>{dataItem.answer}</p>
								</div>
								<br />
							</div>
						))
					) : (
						<p>No Data Found</p>
					)}
				</div>
			</div>
			{/* React */}
			<div className="flex flex-col items-center space-y-4 max-w-2xl mx-auto mt-12 tracking-wider">
				<h1 className="uppercase text-4xl">React</h1>
				<div>
					{ReactData && ReactData.length > 0 ? (
						ReactData.map((dataItem) => (
							<div key={dataItem.id} className="flex flex-col space-y-2">
								<div className="flex space-x-3 text-2xl text-center text-yellow-500 mx-auto">
									<h3>{dataItem.id}.</h3>
									<p>{dataItem.question}</p>
								</div>
								<div className="text-xl text-center border-b border-pink-900 pb-5">
									<p>{dataItem.answer}</p>
								</div>
								<br />
							</div>
						))
					) : (
						<p>No Data Found</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default QuestionsAndAnswers;
