export namespace User {
  export interface Base {
    id: number;
    battleTag: string;
    email: string;
    password: string;
  }
  export interface Login {
    email: string;
    password: string;
  }

  export interface New {
    email: string;
    password: string;
    battleTag: string;
  }

  export interface Update {
    battleTag?: string;
    email?: string;
  }

  export interface UpdatePassword {
    password: string;
    newPassword: string;
  }
}
