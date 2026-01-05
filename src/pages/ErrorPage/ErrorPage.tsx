import styles from './ErrorPage.module.css';

import { Header } from '../../components/Header/Header';
import { CardBox, CardWithTitle } from '../../components/Widget/Widget';
import { Button } from '../../components/Button/Button';

import { useRouter } from '../Router';

import { ErrorCodes, ErrorCodesType } from '../../types';

interface ErrorPageProps {
  errorCode: ErrorCodesType['code'];
}

export const ErrorPage = ({ errorCode }: ErrorPageProps) => {
  const { goToPage } = useRouter();

  let errorTitle = 'Unknown Error';
  let errorMessage = 'An unknown error occurred.';
  let actionText;
  let actionOnClick;

  if (errorCode === ErrorCodes.code) {
    errorTitle = ErrorCodes.title;
    errorMessage = ErrorCodes.message;
    actionText = 'Go to Settings';
    actionOnClick = () => goToPage('settings');
  }

  return (
    <>
      <Header title={`Error ${errorCode}`} />
      <CardWithTitle title={errorTitle}>
        <CardBox className={styles.errorBox}>
          <h1>{errorTitle}</h1>
          <p>{errorMessage}</p>
          {actionText && actionOnClick && (
            <Button onClick={actionOnClick}>{actionText}</Button>
          )}
        </CardBox>
      </CardWithTitle>
      <div className={styles.internalCodeBox}>
        <span>Internal Code: </span>
        <p className={styles.internalCode}>{ErrorCodes.internalCode}</p>
      </div>
    </>
  );
};
