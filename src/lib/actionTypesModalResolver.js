export const actionTypesModalResolver = (actionType) => {
  const actionTypesModifiers = {
    1: {
      title: 'Nuevo Registro',
      variant: 'success',
      text: 'Crear',
    },
    2: {
      title: 'Editar Registro',
      variant: 'primary',
      text: 'Editar',
    },
    3: {
      title: 'Eliminar Registro',
      variant: 'danger',
      text: 'Eliminar',
    }
  };

  return actionTypesModifiers[actionType];
};
