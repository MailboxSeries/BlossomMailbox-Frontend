export interface ModalProps {
    isOpen: boolean;
    onClose: (event?: React.MouseEvent) => void;
    children: React.ReactNode;
    modalTitle: string;
    modalType?: 'SmallModal' | 'Modal'; 
    modalColor?: string;
    color?: string;
    fontSize?: number;
  }

  export interface ModalContentProps extends Partial<ModalProps> {
  }

  
  // show 프로퍼티를 갖는 ModalWrapperProps 인터페이스를 정의
  export interface ModalWrapperProps extends Partial<ModalProps> {}

  export interface ModalButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }

  export interface LetterListModalProps extends Partial<ModalProps> {
    createdDayCnt: number;
  }

  export interface DayLetterListModalProps extends Partial<ModalProps> {
    selectedDate: number;
  }

  export interface SendLetterModalProps extends Partial<ModalProps> {}

  export interface SkinModalProps extends Partial<ModalProps> {}

  export interface LogoutModalProps extends Partial<ModalProps> {}

  export interface SignoutModalProps extends Partial<ModalProps> {}

  export interface LetterModalProps extends Partial<ModalProps> {
    id: number;
  }

  export interface ReplyModalProps extends Partial<ModalProps> {
    data: {
      sendLetter: {
        content: string;
        image: string;
      };
      replyLetter: {
        content: string;
        image: string;
        nickname: string;
      }
    };
  }

  export interface AttendModalProps extends Partial<ModalProps> {
    createdDayCnt: number;
  }

  export interface CatModalProps extends Partial<ModalProps> {
    catID: number;
  }