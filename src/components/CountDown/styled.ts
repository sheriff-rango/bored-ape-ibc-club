import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	margin-top: 30px;
`;

export const TimerContainer = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
`;

export const DigitItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;
`;

export const DigitContainer = styled.div`
	border: 1px solid #02e296;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	width: 80px;
	height: 80px;
	font-weight: bold;
	font-size: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: white;
	color: black;
	@media (max-width: 768px) {
		width: 60px;
		height: 60px;
		font-size: 20px;
	}
`;
