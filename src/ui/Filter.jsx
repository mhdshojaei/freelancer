import { useSearchParams } from 'react-router-dom';

function Filter({ filterField, options }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentFilter = searchParams.get(filterField) || options.at(0).value;
	const handleClick = (value) => {
		searchParams.set(filterField, value);
		setSearchParams(searchParams);
	};
	return (
		<div className='flex items-center gap-x-8 text-xs'>
			<span>وضعیت</span>
			<div className='flex items-start gap-x-2 border border-secondary-100 bg-secondary-0 p-1 rounded-lg'>
				{options.map(({ value, label }) => {
					const isActive = value == currentFilter;
					return (
						<button
							onClick={() => handleClick(value)}
							disabled={isActive}
							className={`whitespace-nowrap rounded-md px-4 py-2 font-bold transition-all duration-300 
                            ${isActive ? '!bg-primary-900 text-white' : 'bg-secondary-0 text-secondary-800'}`}
							key={value}>
							{label}
						</button>
					);
				})}
			</div>
		</div>
	);
}
export default Filter;
