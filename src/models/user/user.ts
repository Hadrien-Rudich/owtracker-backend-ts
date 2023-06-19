export namespace User {
  export interface Details {
    id: number;
    battleTag: string;
    email: string;
    password: string;
  }

  export interface Login {
    email: string;
    password: string;
  }

  export interface Registration {
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
