import React, { useState, useEffect } from "react";
import Button from "./Button";
import ButtonLocked from "./ButtonLocked";

const TimeBlock = ({ time, type }) => {
	return (
		<div className='flex flex-col justify-center items-center mx-4'>
			<p className='text-purple-500 text-2xl font-bold mb-3'>{time}</p>
			<h4>{type}</h4>
		</div>
	);
};

export default function CountDown({ date }) {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const leading0 = (num) => {
		return num < 10 ? "0" + num : num;
	};

	const getTimeUntil = (date) => {
		const time = Date.parse(date) - Date.parse(new Date());
		setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
		setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
		setMinutes(Math.floor((time / 1000 / 60) % 60));
		setSeconds(Math.floor((time / 1000) % 60));
	};

	useEffect(() => {
		setInterval(() => getTimeUntil(date), 1000);

		return () => getTimeUntil(date);
	}, [date]);

	return (
		<>
			<div className='flex flex-col justify-center items-center h-[35vh]'>
				<div className='tile text-center'>
					{Date.parse(new Date()) >= Date.parse(date) ? (
						<>
							<h2 className='mb-0'>Mint is Live</h2>
							<h4 className='my-8 tracking-wider'>81/4,444 Minted</h4>
							<Button text='Mint' />
						</>
					) : (
						<>
							<h2 className='mb-8'>Time Till Mint</h2>
							<div className='flex flex-row mt-8 mb-10'>
								<TimeBlock time={leading0(days)} type='Days' />
								<TimeBlock time={leading0(hours)} type='Hours' />
								<TimeBlock time={leading0(minutes)} type='Minutes' />
								<TimeBlock time={leading0(seconds)} type='Seconds' />
							</div>
							<ButtonLocked text='Coming Soon...' />
						</>
					)}
					<div className='purple-bar-bottom'></div>
				</div>
			</div>
		</>
	);
}
