# Notation

This section provides a concise reference describing notation used
throughout this document. If you are unfamiliar with any of the
corresponding mathematical concepts, @dlbook describe most of these
ideas in chapters 2--4.

**Numbers and Arrays**


  |    |    |
  | -- | -- |
  | $ a$                | A scalar (integer or real)
  | $ \va$              | A vector
  | $ \mA$              | A matrix
  | $ \tA$              | A tensor
  | $ \mI_n$            | Identity matrix with $n$ rows and $n$ columns
  | $ \mI$              | Identity matrix with dimensionality implied by context
  | $ \ve^{(i)}$        | Standard basis vector $[0,\dots,0,1,0,\dots,0]$ with a 1 at position $i$
  | $ \text{diag}(\va)$ | A square, diagonal matrix with diagonal entries given by $\va$
  | $ \ra$              | A scalar random variable
  | $ \rva$             | A vector-valued random variable
  | $ \rmA$             | A matrix-valued random variable
  --------------------- ---------------------------------------------------------------------------------------

**Sets and Graphs**


  |    |    |
  | -- | -- |
  | $ \sA$                   | A set
  | $ \R$                    | The set of real numbers
  | $ \{0, 1\}$              | The set containing 0 and 1
  | $ \{0, 1, \dots, n \}$   | The set of all integers between $0$ and $n$
  | $ [a, b]$                | The real interval including $a$ and $b$
  | $ (a, b]$                | The real interval excluding $a$ but including $b$
  | $ \sA \backslash \sB$    | Set subtraction, i.e., the set containing the elements of $\sA$ that are not in $\sB$
  | $ \gG$                   | A graph
  | $ \parents_\gG(\ervx_i)$ | The parents of $\ervx_i$ in $\gG$
  -------------------------- ----------------------------------------------------------------------------------------------------

**Indexing**


  |    |    |
  | -- | -- |
  | $ \eva_i$         | Element $i$ of vector $\va$, with indexing starting at 1
  | $ \eva_{-i}$      | All elements of vector $\va$ except for element $i$
  | $ \emA_{i,j}$     | Element $i, j$ of matrix $\mA$
  | $ \mA_{i, :}$     | Row $i$ of matrix $\mA$
  | $ \mA_{:, i}$     | Column $i$ of matrix $\mA$
  | $ \etA_{i, j, k}$ | Element $(i, j, k)$ of a 3-D tensor $\tA$
  | $ \tA_{:, :, i}$  | 2-D slice of a 3-D tensor
  | $ \erva_i$        | Element $i$ of the random vector $\rva$
  ------------------- -----------------------------------------------------------------------

**Linear Algebra Operations**


  |    |    |
  | -- | -- |
  | $ \mA^\top$          | Transpose of matrix $\mA$
  | $ \mA^+$             | Moore-Penrose pseudoinverse of $\mA$
  | $ \mA \odot \mB$     | Element-wise (Hadamard) product of $\mA$ and $\mB$
  | $ \mathrm{det}(\mA)$ | Determinant of $\mA$
  ---------------------- -----------------------------------------------------------------

**Calculus**

  |    |    |
  | -- | -- |
  | $\frac{d y} {d x}$                            | Derivative of $y$ with respect to $x$
  | $ \frac{\partial y} {\partial x}$             | Partial derivative of $y$ with respect to $x$
  | $ \nabla_\vx y$                               | Gradient of $y$ with respect to $\vx$
  | $ \nabla_\mX y$                               | Matrix derivatives of $y$ with respect to $\mX$
  | $ \nabla_\tX y$                               | Tensor containing derivatives of $y$ with respect to $\tX$
  | $ \frac{\partial f}{\partial \vx}$            | Jacobian matrix $\mJ \in \R^{m\times n}$ of $f: \R^n \rightarrow \R^m$
  | $ \nabla_\vx^2 f(\vx)\text{ or }\mH( f)(\vx)$ | The Hessian matrix of $f$ at input point $\vx$
  | $ \int f(\vx) d\vx$                           | Definite integral over the entire domain of $\vx$
  | $ \int_\sS f(\vx) d\vx$                       | Definite integral with respect to $\vx$ over the set $\sS$
  ----------------------------------------------- -------------------------------------------------------------------------------------


  |    |    |
  | -- | -- |
  | $ \ra \bot \rb$                                | The random variables $\ra$ and $\rb$ are independent
  | $ \ra \bot \rb \mid \rc$                       | They are conditionally independent given $\rc$
  | $ P(\ra)$                                      | A probability distribution over a discrete variable
  | $ p(\ra)$                                      | A probability distribution over a continuous variable, or over a variable whose type has not been specified
  | $ \ra \sim P$                                  | Random variable $\ra$ has distribution $P$
  | $ \E_{\rx\sim P} [ f(x) ]\text{ or } \E f(x)$  | Expectation of $f(x)$ with respect to $P(\rx)$
  | $ \Var(f(x))$                                  | Variance of $f(x)$ under $P(\rx)$
  | $ \Cov(f(x),g(x))$                             | Covariance of $f(x)$ and $g(x)$ under $P(\rx)$
  | $ H(\rx)$                                      | Shannon entropy of the random variable $\rx$
  | $ \KL ( P \Vert Q )$                           | Kullback-Leibler divergence of P and Q
  | $ \mathcal{N} ( \vx ; \vmu , \mSigma)$         | Gaussian distribution over $\vx$ with mean $\vmu$ and covariance $\mSigma$
  ------------------------------------------------ --------------------------------------------------------------------------------------------------------------------------

**Functions**

  |    |    |
  | -- | -- |
  | $ f: \sA \rightarrow \sB$ | The function $f$ with domain $\sA$ and range $\sB$
  | $ f \circ g$              | Composition of the functions $f$ and $g$
  | $ f(\vx ; \vtheta)$       | A function of $\vx$ parametrized by $\vtheta$. (Sometimes we write $f(\vx)$ and omit the argument $\vtheta$ to lighten notation)
  | $ \log x$                 | Natural logarithm of $x$
  | $ \sigma(x)$              | Logistic sigmoid, $ \frac{1} {1 + \exp(-x)}$
  | $ \zeta(x)$               | Softplus, $\log(1 + \exp(x))$
  | $ || \vx ||_p$            | $\normlp$ norm of $\vx$
  | $ || \vx ||$              | $\normltwo$ norm of $\vx$
  | $ x^+$                    | Positive part of $x$, i.e., $\max(0,x)$
  | $ \1_\mathrm{condition}$  | is 1 if the condition is true, 0 otherwise
  --------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------

Sometimes we use a function $f$ whose argument is a scalar but apply it
to a vector, matrix, or tensor: $f(\vx)$, $f(\mX)$, or $f(\tX)$. This
denotes the application of $f$ to the array element-wise. For example,
if $\tC = \sigma(\tX)$, then $\etC_{i,j,k} = \sigma(\etX_{i,j,k})$ for
all valid values of $i$, $j$ and $k$.

**Datasets and Distributions**

  |    |    |
  | -- | -- |
  | $ \pdata$                      | The data generating distribution
  | $ \ptrain$                     | The empirical distribution defined by the training set
  | $ \sX$                         | A set of training examples
  | $ \vx^{(i)}$                   | The $i$-th example (input) from a dataset
  | $ y^{(i)}\text{ or }\vy^{(i)}$ | The target associated with $\vx^{(i)}$ for supervised learning
  | $ \mX$                         | The $m \times n$ matrix with input example $\vx^{(i)}$ in row $\mX_{i,:}$
  -------------------------------- ----------------------------------------------------------------------------------------
