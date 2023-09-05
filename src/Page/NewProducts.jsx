import React, { useState } from 'react';
import { MdOutlineImagesearchRoller } from 'react-icons/md';
import styled from 'styled-components';
import { addNewProducts } from '../API/firebase';
import { uploadImage } from '../API/uploader';
import Button from '../Components/Button';
import { Input } from './Login';

export default function NewProducts() {
	const [product, setProduct] = useState({});
	const [file, setFile] = useState();
	const [uploading, setUploading] = useState(false);
	const [success, setSuccess] = useState();

	const submitHandler = e => {
		e.preventDefault();
		setUploading(true);
		uploadImage(file) //
			.then(url => {
				addNewProducts(product, url);
			})
			.then(() => {
				setSuccess('📁제품 등록 완료');
				setProduct({});
				setFile('');
				setTimeout(() => {
					setSuccess(null);
				}, 4000);
			})
			.finally(() => setUploading(false));
	};

	const changeHandler = e => {
		const { value, name, files } = e.target;
		if (name === 'file') {
			setFile(files && files[0]);
			return;
		}
		setProduct(product => ({ ...product, [name]: value }));
	};
	return (
		<div className="flex justify-center items-center gap-x-10">
			<div className="flex flex-col">
				{file ? (
					<img className="h-96 w-96" src={URL.createObjectURL(file)} alt="product image" />
				) : (
					<View>
						<MdOutlineImagesearchRoller size={50} />
					</View>
				)}
				{success && <p className="flex justify-center text-xl mt-2 bg-slate-200"> {success}</p>}
			</div>

			<form className="flex justify-center items-center flex-col gap-y-3" onSubmit={submitHandler}>
				<h1 className="font-bold font-serif text-2xl mb-6">NewProducts</h1>
				<Input type="file" accept="img/*" name="file" required onChange={changeHandler} />
				<Input
					type="text"
					placeholder="제품명"
					name="title"
					value={product.title ?? ''}
					required
					onChange={changeHandler}
				/>
				<Input
					type="number"
					placeholder="가격"
					name="price"
					value={product.price ?? ''}
					required
					onChange={changeHandler}
				/>
				<Input
					type="text"
					placeholder="카테고리"
					name="category"
					value={product.category ?? ''}
					required
					onChange={changeHandler}
				/>
				<Input
					type="text"
					placeholder="제품설명"
					name="description"
					value={product.description ?? ''}
					required
					onChange={changeHandler}
				/>
				<Input
					type="text"
					placeholder="옵션(콤마로 구분)"
					name="options"
					value={product.options ?? ''}
					required
					onChange={changeHandler}
				/>
				<Button
					text={uploading ? '등록중...' : '등록하기'}
					className="bg-black text-white"
					onClick={submitHandler}
				/>
			</form>
		</div>
	);
}

const View = styled.div`
	width: 24rem;
	height: 26rem;
	border: 2px solid var(--color-brand);
	border-style: dotted;
	display: flex;
	align-items: center;
	justify-content: center;
`;
