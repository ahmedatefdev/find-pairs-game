import { NextPageContext } from 'next';
import NextError from 'next/error'

interface IProps {
    statusCode: number,
    err: any;
}
const CustomError = (props: IProps) => {
    const { statusCode, err } = props
    const message = err ? err.message ? err.message : err : ""
    return (<NextError statusCode={statusCode || 400} title={message} />);
}

const getInitialProps = ({ res, err }: NextPageContext) => {
    let statusCode: number;
    if (res) {
        statusCode = res.statusCode;
    } else if (err) {
        statusCode = err.statusCode;
    } else {
        statusCode = null;
    }
    return { statusCode, err };
}

CustomError.getInitialProps = getInitialProps;

export default CustomError;