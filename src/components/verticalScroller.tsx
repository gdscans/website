import { Children } from 'react';

export default async function VerticalScroller({children}: { children: React.ReactNode }) {
	return (
		<div className="w-full">
			<div className="flex flex-row gap-8 w-full overflow-x-scroll pb-2">
				{Children.map(children, child => {
					return <div>{child}</div>;
				})}
			</div>
		</div>
	);
}