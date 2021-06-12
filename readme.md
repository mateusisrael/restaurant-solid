// Fluxo de Pedidos:
// o GARÇOM pega o pedido na MESA
// o GARÇOM paça o pedido pra COSINHA
// a COSINHA prepara os pratos FIFO
// a COSINHA paça o prato pro GARÇOM
// o GARÇOM leva o prato até a MESA

// Entidades:
mesa: {
  id,
  fazPedido(pedidoId)
}
    
garçom: {
  levaComanda(pedidoId)
}

// pedido: {
  id
}

cozinha {
  preparaComida
}

a MESA fazPedido ao GARÇOM que levaComanda (pedido) a COZINHA.
a COZINHA preparaComida (comanda) e retorna pro GARÇOM que entregaPedido à MESA
