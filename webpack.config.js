import { resolve as _resolve } from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export const entry = './src/index.tsx';
export const output = {
	filename: 'bundle.js',
	path: _resolve(__dirname, 'dist'),
};
export const module = {
	rules: [
		{
			test: /\.(tsx|ts)?$/,
			loader: 'ts-loader',
			exclude: /node_modules/,
			options: {
				transpileOnly: true,
			},
		},
		{
			test: /\.(js|jsx)?$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
			},
		},
		{
			test: /\.(s[ac]|c)ss$/i,
			use: ['style-loader', 'css-loader?url=false', 'postcss-loader', 'sass-loader'],
		},
		{
			test: /\.(png|jpe?g|gif|svg)$/i,
			type: 'asset',
		},
	],
};
export const resolve = {
	extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
	plugins: [new TsconfigPathsPlugin({})],
};
